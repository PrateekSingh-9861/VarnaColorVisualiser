import React from "react";

const AboutUs = () => {
    return (
        <section className="text-gray-800 px-2 pt-16 pb-16 sm:py-12 max-w-6xl mx-auto" id="about">
            <div className="text-center sm:mb-12 mb-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 sm:mb-4">About <span className="text-red-600">Varna</span></h2>
                <p className="sm:text-lg text-sm text-gray-600 max-w-2xl mx-auto">
                    Bringing color, art, and heritage to life with a modern touch.
                </p>
            </div>

            <div className="sm:space-y-12 space-y-6 text-justify text-gray-700 sm:text-lg leading-relaxed">
                <p>
                    Creating a home out of a space is a beautiful journey, and at <strong>Varna</strong>, we are honored to take that journey with you. Whether you're visualizing a new wall color or exploring interior ideas, we offer tools and services that help bring your dream home to life. From uploading your room photo to digitally applying colors and visualizing changes, we ensure your transformation is smooth, exciting, and uniquely yours.
                </p>

                <div>
                    <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-1">Who Are We?</h3>
                    <p>
                        <strong>Varna</strong> is a color visualization platform developed with a passion for interior design and technology. Our goal is to make the process of choosing wall colors and exploring painting ideas fun, interactive, and hassle-free.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-1">What Do We Do?</h3>
                    <p>
                        We offer a platform where users can upload room images, apply colors using brush or bucket tools, and preview design combinations. With modules for feedback, queries, design galleries, and more, Varna is more than a tool — it’s your design companion.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-1">Our Tools</h3>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong>Color Visualizer:</strong> Bucket & Brush tools</li>
                        <li><strong>Color Inspiration:</strong> Explore vibrant palettes</li>
                        <li><strong>Room Image Editor:</strong> Upload & color your space</li>
                        <li><strong>Drag-and-Drop Upload:</strong> Quick & easy image input</li>
                        <li><strong>Budget Estimator:</strong> (Coming Soon)</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-1">Our Services</h3>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Digital Wall Painting Preview</li>
                        <li>User Feedback & Support</li>
                        <li>Query & Contact Assistance</li>
                        <li>Design & Color Consultation (Upcoming)</li>
                        <li>Admin Dashboard for Color Management</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-1">Visualize Your Room with Varna</h3>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong>Color Palette:</strong> Explore hundreds of color shades</li>
                        <li><strong>Live Preview:</strong> Apply colors to your uploaded room photo</li>
                        <li><strong>Example Rooms:</strong> Get inspiration from sample designs</li>
                        <li><strong>Design Gallery:</strong> Browse curated visuals</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-1" id="faq">FAQs</h3>
                    <ul className="space-y-3 text-base text-gray-700">
                        <li><strong>Q:</strong> How do I upload a photo for color visualization?<br /><strong>A:</strong> Go to the Visualizer section and click "Upload Image".</li>
                        {/* <li><strong>Q:</strong> Can I save my designs?<br /><strong>A:</strong> Yes, logged-in users can save their painted designs.</li> */}
                        <li><strong>Q:</strong> Do I need to sign up?<br /><strong>A:</strong> You can explore features, but uploading and saving requires login.</li>
                        <li><strong>Q:</strong> Can I send suggestions?<br /><strong>A:</strong> Yes! Use the Feedback form on our Feedback page.</li>
                        <li><strong>Q:</strong> Will more tools be added?<br /><strong>A:</strong> Absolutely. Stay tuned for the budget calculator, AR tools, and more.</li>
                        <li><strong>Q:</strong> For more question?<br /><strong>A:</strong> Contact Us</li>    
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
