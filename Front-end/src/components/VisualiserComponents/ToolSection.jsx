import React, { useRef, useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import "./ToolSection.css"

const ToolSection = ({ selectedImage, selectedColor }) => {
    const [image, setImage] = useState(selectedImage);
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);
    const ctxRef = useRef(null);
    const [currentColor, setCurrentColor] = useState('#B22222');
    const [tool, setTool] = useState("bucket");
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    const [isPainting, setIsPainting] = useState(false);
    const [cv, setCv] = useState(false); // Store OpenCV in state
    const [showSizePopup, setShowSizePopup] = useState(false); // Controls size popup visibility
    const [size, setSize] = useState(20); // Current size for brush/eraser

    useEffect(() => {
        if (selectedImage) {
            setImage(selectedImage);
        }
    }, [selectedImage]);

    useEffect(() => {
        setCurrentColor(selectedColor);
        setTool("bucket");
    }, [selectedColor]);

    useEffect(() => {
        const checkCV = setInterval(() => {
            if (window.cv && window.cv.imread) {
                setCv(true); // Assign OpenCV to state
                clearInterval(checkCV);
            }
        }, 100);
        return () => clearInterval(checkCV);
    }, []);

    useEffect(() => {
        // Handle canvas initialization and image processing
        const canvas = canvasRef.current;
        if (canvas) {
            // Set canvas size
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            const ctx = canvas.getContext("2d");
            ctxRef.current = ctx;

            // Handle image processing
            if (image) {
                const img = new Image();
                img.src = image;
                img.crossOrigin = "Anonymous";
                img.onload = () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    processImageEdges(img);  // Custom logic to process image
                    processColorImage(img);  // Custom logic to process color
                    setHistory([]);  // Reset undo history
                    setRedoStack([]);  // Reset redo stack
                };
            }
        }
    }, [canvasRef, image]);  // Runs when either `canvasRef` or `image` changes

    const handleMouseDown = (event) => {
        if (tool === "brush" || tool === "eraser") {
            setIsPainting(true);
            const ctx = ctxRef.current;
            ctx.beginPath();
            ctx.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
        } else if (tool === "bucket") {
            if (currentColor) {
                const x = event.nativeEvent.offsetX;
                const y = event.nativeEvent.offsetY;
                const ctx = ctxRef.current;
                const targetColorData = ctx.getImageData(x, y, 1, 1).data;
                const targetColor = [targetColorData[0], targetColorData[1], targetColorData[2]];
                const replacementColor = currentColor.match(/\d+/g).map(Number); // Ensure it's RGBA
                floodFill(x, y, targetColor, replacementColor);
            }
        }
        else {
            const newTool = event.target.id;
            if (newTool !== tool) {
                setTool(newTool);
            }
        }
    };

    function floodFill(x, y, targetColor, replacementColor, tolerance = 30) {
        const ctx = ctxRef.current;
        const canvas = canvasRef.current;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        function getPixelIndex(x, y) {
            return (y * canvas.width + x) * 4;
        }
        function isColorMatch(px, targetColor, tolerance) {
            return (
                Math.abs(px[0] - targetColor[0]) <= tolerance &&
                Math.abs(px[1] - targetColor[1]) <= tolerance &&
                Math.abs(px[2] - targetColor[2]) <= tolerance
            );
        }
        const stack = [[x, y]];
        const visited = new Set();
        while (stack.length) {
            const [cx, cy] = stack.pop();
            const index = getPixelIndex(cx, cy);
            if (
                cx >= 0 && cx < canvas.width && cy >= 0 && cy < canvas.height &&
                !visited.has(`${cx},${cy}`)
            ) {
                // Check if the pixel is either the target color or transparent (alpha = 0)
                const isTargetColor = isColorMatch([pixels[index], pixels[index + 1], pixels[index + 2]], targetColor, tolerance);
                const isTransparent = pixels[index + 3] === 0;
                if (isTargetColor || isTransparent) {
                    // Fill the pixel with the replacement color
                    pixels[index] = replacementColor[0];
                    pixels[index + 1] = replacementColor[1];
                    pixels[index + 2] = replacementColor[2];
                    // pixels[index + 3] = 255; // Ensure full opacity
                    visited.add(`${cx},${cy}`);
                    stack.push([cx - 1, cy], [cx + 1, cy], [cx, cy - 1], [cx, cy + 1]);
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }

    const processImageEdges = (img) => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;

        let edgeData = applyCannyEdgeDetection(data);
        if (edgeData) {
            combineEdgesWithTransparency(edgeData, data);
            ctx.putImageData(imageData, 0, 0);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const applyCannyEdgeDetection = (data) => {
        if (!cv) {
            console.error("OpenCV not loaded yet!");
            return;
        }// Convert data to an OpenCV matrix
        const mat = cv.matFromArray(canvas.height, canvas.width, cv.CV_8UC1, data);
        const blurred = new cv.Mat();
        const edges = new cv.Mat();
        cv.GaussianBlur(mat, blurred, new cv.Size(5, 5), 1.5, 1.5);  // Apply Gaussian Blur to reduce noise**
        cv.Canny(blurred, edges, 75, 150);                          // Adjust thresholds for sharper edges
        let edgeData = new Uint8ClampedArray(edges.data);          // Convert edges to a JavaScript array (optional)
        mat.delete();                                             // Free up memory to avoid leaks**
        blurred.delete();
        edges.delete();
        return edgeData;
    };

    const combineEdgesWithTransparency = (edgeData, originalData) => {
        if (edgeData && originalData) {
            for (let i = 0; i < originalData.length; i += 4) {
                if (edgeData[Math.floor(i / 4)] > 0) {
                    originalData[i] = 0;
                    originalData[i + 1] = 0;
                    originalData[i + 2] = 0;
                    originalData[i + 3] = 255; // Full opacity for edges
                } else {
                    originalData[i + 3] = 0; // Make background transparent         
                }
            }
        }
    };

    const handleMouseMove = (event) => {
        if (isPainting) {
            const ctx = ctxRef.current;
            if (tool === "brush") {
                ctx.strokeStyle = currentColor;
                ctx.lineWidth = size;
                ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
                ctx.stroke();
            }
            else if (tool === "eraser") {
                ctx.globalCompositeOperation = "destination-out"; 
                ctx.lineWidth = size;
                ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
                ctx.stroke();
                ctx.globalCompositeOperation = "source-over"; // Reset to default
            }
        }
    };

    const handleMouseUp = () => {
        setIsPainting(false);
        ctxRef.current.closePath();
        saveHistory();
    };

    const saveHistory = () => {
        const canvas = canvasRef.current;
        // Save the current state of the canvas (image data)
        const ctx = ctxRef.current;
        setHistory((prevHistory) => [
            ...prevHistory,
            ctx.getImageData(0, 0, canvas.width, canvas.height)  // Save canvas state
        ]);
        setRedoStack([]);  // Clear redo stack whenever new action is taken
    };

    const undo = () => {
        if (history.length > 0) {
            const lastState = history[history.length - 1];
            setRedoStack([...redoStack, lastState]);

            // Remove the last state (undo it)
            const newHistory = history.slice(0, -1);
            setHistory(newHistory);

            // Restore the previous state if it exists
            if (newHistory.length > 0) {
                const prevState = newHistory[newHistory.length - 1];
                ctxRef.current.putImageData(prevState, 0, 0);
            } else {
                // If there's no previous state, clear the canvas to the original image
                const canvas = canvasRef.current;
                const ctx = ctxRef.current;
                const img = new Image();
                img.src = image;
                img.onload = () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                };
            }
        }
    };
    const handleToolClick = (toolType) => {
        setTool(toolType);
        setShowSizePopup(true); // Show size popup when brush or eraser is clicked
    };

    const handleSizeSelect = (selectedSize) => {
        setSize(selectedSize);
        setShowSizePopup(false); // Hide popup after selection
    };

    const redo = () => {
        if (redoStack.length > 0) {
            const redoState = redoStack.pop();
            setHistory([...history, redoState]);
            ctxRef.current.putImageData(redoState, 0, 0);
        }
    };

    return (
        <>
            <h1 className='text-[3.5em] crete-round-regular'>Varna Visualiser</h1>
            <div className='flex flex-col gap-3'>
                <div className='bg-white h-[77vh] relative border ' onDrop={handleDrop}
                    onDragOver={handleDragOver}>
                    <div className='absolute w-full h-full flex flex-col items-center justify-center gap-1 pt-8'>
                        <img src='/images/upload-img.png' alt="Upload Image" className="h-46 w-46" />
                        <h1 >click on Upload Button</h1>
                        <h4 className='text-zinc-600'>or Drag and Drop files here</h4>
                    </div>
                    <img id="tool-bg-image" src={image} alt="" className="absolute w-full h-full" />
                    <canvas ref={canvasRef} onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}
                        className="absolute w-full h-full cursor-crosshair"></canvas>
                </div>
                <div className='flex justify-center gap-5 items-center pl-2.5 pr-2.5'>
                    <button onClick={() => fileInputRef.current.click()} className="toolBtn">
                        <i className="ri-chat-upload-line"></i>Upload</button>

                    <button onClick={() => handleToolClick('brush')} className="toolBtn">
                        <i className="ri-paint-brush-fill"></i>Brush</button>

                    <button onClick={() => setTool("bucket")} className="toolBtn">
                        <i className="ri-paint-fill"></i>Bucket</button>

                    <button onClick={() => handleToolClick('eraser')} className="toolBtn">
                        <i className="ri-eraser-fill"></i>Eraser</button>

                    <button onClick={undo} className="toolBtn">
                        <i className="ri-arrow-go-back-fill"></i>Undo</button>

                    <button onClick={redo} className="toolBtn">
                        <i className="ri-arrow-go-forward-fill"></i>Redo</button>

                </div>
            </div>
            {showSizePopup && (
                <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
                    <h3>Select Size</h3>
                    <input
                        type="range"
                        min="10"
                        max="50"
                        step="10"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                    />
                    <p>Selected Size: {size}</p>
                    <button
                        onClick={() => handleSizeSelect(size)}
                        className="toolBtn"
                    >
                        Apply
                    </button>
                </div>
            )}

            {/* Hidden File Input yeh sirf input function call ke liye use hua hai*/}
            <input type="file" accept="image/*" ref={fileInputRef}
                style={{ display: "none" }} onChange={handleImageUpload} />
        </>
    )
}

export default ToolSection;


