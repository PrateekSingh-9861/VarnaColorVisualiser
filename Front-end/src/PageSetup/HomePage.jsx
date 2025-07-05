import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import ServiceCard from "../components/HomePage/ServiceCard"
import DiscoverCard from "../components/HomePage/DiscoverCard"
import "../components/HomePage/homepage.css"
import ImgCarousel from '../components/HomePage/ImgCarousel';
import ToolCard from '../components/HomePage/ToolsCard';
import AboutUs from "../components/HomePage/AboutUs";
import axios from "axios";

const HomePage = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.fullName.trim()) {
            formErrors.fullName = "Full Name is required";
        }

        if (!formData.email.trim()) {
            formErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            formErrors.email = "Email format is invalid";
        }

        if (!formData.phone.trim()) {
            formErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = "Phone number must be 10 digits";
        }

        if (!formData.message.trim()) {
            formErrors.message = "Message is required";
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0; // true = no error
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Don't submit if errors
        }

        try {
            const res = await axios.post("http://localhost:5000/api/contact", formData);
            alert("Message sent successfully!");
            setFormData({ fullName: "", email: "", phone: "", message: "" });
            setErrors({});
        } catch (error) {
            console.error(error);
            alert("Failed to send message. Try again!");
        }
    };



    //  carousel's usestate & others
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setLoading(false), 1000);
        };
        handleLoad();
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
    }, []);
    const carouselImages = [
        "/images/carousel-1.jpg",
        "/images/carousel-2.jpg",
        "/images/carousel-3.webp",
    ];

    return (
        <>
            {/* Preloader */}
            {loading && (<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
                style={{ background: "#FEFCFE url(/preloader.gif) no-repeat center", backgroundSize: "45%", }}>
            </div>)}

            <header>
                <div className='h-8 w-full flex justify-center items-center text-black'>
                    <Link to="/visualiser" className='text-lg crete-round-regular font-bold uppercase transition-all 
                        hover:underline hover:scale-105'>Varna Visualiser</Link>
                </div>
            </header>

            <nav className='h-12 sm:h-16 w-full flex text-white bg-[#17111f] border-b-2 justify-between items-centerp-2 '>
                <div className='flex items-center'>
                    <img src="/images/logo.png" alt="" className='h-10 w-10 sm:h-14 sm:w-14' />
                    <h1 className='text-2xl sm:text-4xl crete-round-regular font-bold'>VARNA</h1>
                </div>
                <div className="sm:flex sm:text-lg sm:space-x-10 sm:py-4 sm:px-10 hidden">
                    <a className="transition-all hover:underline hover:scale-105 " href="#discover-section">
                        Paints &amp; colours
                    </a>
                    <a className="transition-all hover:underline hover:scale-105 " href="#services">
                        Services
                    </a>
                    <a className="transition-all hover:underline hover:scale-105" href="#tools">
                        Tools
                    </a>
                    <a className="transition-all hover:underline hover:scale-105" href="#about">
                        About US
                    </a>
                </div>

                {/* <button className="relative overflow-hidden px-4 py-2 rounded-full text-white bg-orange-300 transition-all duration-500 hover:text-black
                        before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-white before:to-white before:transition-all 
                        before:duration-500 hover:before:w-full">
                            <span className="relative z-10">SIGN UP</span>
                        </button> */}

                <div className="sm:hidden p-2">
                    <i className="ri-menu-line text-2xl cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    ></i>
                </div>
            </nav >

            {/* intro container    */}
            < section >
                <div className="relative flex items-center w-full">
                    <img alt="" className="w-full h-[43vh] sm:h-[85vh]" src="/images/IMG-20250130-WA0084.jpg" />
                    <div className="absolute flex flex-col items-center p-10 sm:p-8 sm:left-40 ">
                        <h1 className="text-white text-lg sm:text-4xl font-bold">
                            PRESENTING
                        </h1>
                        <h2 className="text-white font-bold text-4xl sm:text-8xl font-serif mt-1 sm:mt-4">
                            VARNA | <span className='kalam'>वर्ण</span>
                        </h2>
                        <p className="text-white font-bold text-2lg mt-2 sm:mt-4">
                            HERITAGE OF INDIAN WHITES &amp; IVORY
                        </p>
                        <p className="text-white font-bold text-2lg mt-1 sm:mt-4 text-center">
                            Rich. Luxurious. And understated. <br /> Add a touch of India’s opulent history to your space.
                        </p>
                        <button className="relative overflow-hidden py-2 px-4 sm:py-3 mt-6 rounded-full font-bold text-black bg-[#F6F6F6] transition-all duration-500 hover:text-white
                            before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-[#17111f] before:to-[#17111f] before:transition-all 
                            before:duration-500 hover:before:w-full">
                            <Link to="/Signup" className="relative font-bold z-10">SIGN UP <i className="ri-arrow-right-line"></i></Link>
                        </button>
                        <div className="text-black mt-2  text-center flex">
                            <Link to="/Login" className="transition-all hover:underline hover:scale-105 text-white md:text-black" href="#">
                                Already a user <span className='text-white font-bold'> LOGIN</span>
                            </Link>
                        </div>

                    </div>
                    <div className="hidden md:block md:absolute md:top-30 md:right-40 ">
                        <img src="/images/logo.png" className="h-96 w-auto" alt="Varna Logo" />
                    </div>
                </div>
            </section >

            {/* intro text section */}
            < section >
                <p className='m:mt-8 mt-4 sm:text-xl text-2sm text-center px-3 sm:px-20 sm:leading-10 leading-8 text-gray-700'>Painting your home is an exciting journey, but finding the perfect colours, high-quality products, and skilled painters—while ensuring a hassle-free experience—can be overwhelming.
                    That’s where Varna comes in! Our goal is to transform your home with expert painting services, making the process seamless, safe, and enjoyable.
                    With Varna, your walls become a canvas for creativity and elegance. Let us bring your vision to life with precision and professionalism.</p>
            </section >

            {/*contact us section  */}
            < section className="flex flex-col items-center text-white justify-center" >
                <h3 className='sm:text-6xl text-3xl mt-8 sm:mt-12 text-black font-light text-center'>
                    Get the right assistance for all your painting needs
                </h3>

                <div className="sm:w-[70vw] w-[92vw] border border-white grid sm:mt-8 mt-6 sm:grid-cols-2 sm:gap-8 gap-2 bg-[#425E8E] sm:p-4 p-3 rounded-lg">
                    {/* Left Side - Image */}
                    <div>
                        <img src="/images/contact-image.jpg" alt="" className="w-full sm:h-96 border border-white rounded-lg" />
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="border sm:h-96 h-80 sm:p-6 p-3 rounded-lg overflow-auto custom-scrollbar">
                        <form className="sm:space-y-3 space-y-1 " onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-semibold">Full Name</label>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                                    className="w-full border-b border-white focus:outline-none focus:border-black bg-transparent py-1"
                                    placeholder="Your Name" required />
                                {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold">E-mail</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange}
                                    className="w-full border-b border-white focus:outline-none focus:border-black bg-transparent py-1"
                                    placeholder="Your Email" required />
                                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold">Phone No.</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                    className="w-full border-b border-white focus:outline-none focus:border-black bg-transparent py-1"
                                    placeholder="Your Mobile Number" required />
                                {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange}
                                    className="w-full border-b border-white focus:outline-none focus:border-black bg-transparent py-1"
                                    placeholder="Your Message" required />
                                {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                            </div>

                            <button type="submit" className="relative px-4 py-1 sm:py-2 text-m font-medium border overflow-hidden rounded-full text-white transition-all 
                             duration-500 hover:text-black before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-white before:to-white 
                             before:transition-all before:duration-500 hover:before:w-full">
                                <span className="relative z-10 uppercase">Contact Us <i className="ri-arrow-right-line"></i></span>
                            </button>
                        </form>

                    </div>
                </div>
            </section >

            {/* Video section */}
            < section className='sm:mt-20 mt-16 w-full relative' >
                <div className='relative'>
                    <video
                        src='/paint-video.mp4' autoPlay loop muted id="video"
                        className="w-full sm:h-[55vh] h-[45vh] object-cover">
                    </video>
                </div>
                <div className='h-full w-full absolute z-10 sm:top-20 sm:left-20 top-60 left-4  uppercase'>
                    <h1 className='sm:text-5xl text-2xl text-black sm:leading-16 font-bold crete-round-regular sm:block hidden'>WE PROVIDE <br /> Professional <br /> Painting Services  & <br /> Colour Visualization</h1>
                    <h1 className='text-xl text-black font-bold crete-round-regular sm:hidden '>WE PROVIDE Professional <br /> Painting Services  & <br /> Colour Visualization</h1>
                </div>
                <img src="/images/logo.png" alt="" className="h-20 sm:block hidden w-20 absolute bottom-2 sm:bottom-6 z-10 sm:right-8" />
            </section >

            {/* discover cards section */}
            < section id='discover-section' >
                <DiscoverCard />
            </section >

            {/* service cards section  */}
            < section className='flex flex-col items-center justify-center' id='services' >
                <h2 className='text-6xl font-light pt-16'>Explore our services</h2>
                <ServiceCard />
            </section >

            {/* img carousel */}
            < section className='' >
                <ImgCarousel images={carouselImages} />
            </section >

            <section className='flex flex-col bg-[#F6F6F6] pb-18 items-center justify-center' id='tools' >
                <h2 className='text-6xl font-light pt-16'>Explore our Tools</h2>
                <ToolCard />
            </section>

            {/* <Link to="/Admin" className="transition-all hover:underline hover:scale-105" href="#">
                GO to adminpage
            </Link >
            <Link to="/UserDashboard" className="transition-all hover:underline hover:scale-105" href="#">
                GO to user dashboard
            </Link > */}

            <section className='flex flex-col items-center justify-center'>
                <AboutUs />
            </section>

            <footer className="bg-[#17111f] text-white mt-20 px-6 sm:px-10 pt-12 pb-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Brand Description */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">VARNA</h3>
                        <p className="text-lg text-gray-400 max-w-md">
                            Bringing colour, art, and heritage to life through professional painting services and visualization tools.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3">Navigation</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link to="/visualiser" className="hover:text-white transition">Visualizer</Link></li>
                            <li><a href="#services" className="hover:text-white transition">Services</a></li>
                            <li><a href="#tools" className="hover:text-white transition">Tools</a></li>
                            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3">Support</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
                            <li><Link to="/signup" className="hover:text-white transition">Sign Up</Link></li>
                            <li><Link to="/Admin" className="hover:text-white transition">Admin Dashboard</Link></li>
                            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
                            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                        </ul>
                    </div>

                </div>
            </footer>



        </>
    )
}

export default HomePage
