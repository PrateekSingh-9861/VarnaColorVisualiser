import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const SignupPage = () => {
  const [form, setForm] = useState({ name: '', email: '', telephone: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState('');

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/signup', form);
      setMessage(res.data.message);

      // Redirect to login page after successful sign-up
      if (res.status === 201) {
        navigate("/login"); // Redirect to the login page
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error occurred');
    }
  };

  const sharedVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div className="h-screen w-screen px-4 flex pt-10 sm:pt-0 sm:items-center justify-center bg-[#F6F6F6]" initial="hidden" animate="visible" variants={sharedVariants}>
        <div className="sm:w-[60vw] w-full sm:h-[70vh] h-[82vh] flex-col rounded-2xl bg-[#EDEAE0] overflow-hidden border shadow-black shadow-2xl">
          <motion.h1 className="sm:text-5xl text-4xl crete-round-regular text-center mt-4 sm:mt-6" variants={sharedVariants}>
            SIGN UP
          </motion.h1>

          <div className="flex sm:flex-row flex-col justify-center items-center">
            {/* Image Section */}
            <motion.div className="w-full sm:w-[50%] flex justify-center items-center " variants={sharedVariants}>
              <img src="/images/img-signuppage.png" alt="Feedback Illustration" className="w-[50%] pt-2 sm:p-6 sm:w-[80%] h-auto object-cover" />
            </motion.div>
            <motion.div className="w-full sm:w-[50%] flex flex-col sm:pt-8 pt-4 justify-center px-8" variants={sharedVariants}>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full">
                {/* Name */}
                <motion.div className="flex flex-col" variants={sharedVariants}>
                  <label className="text-sm font-medium mb-1" htmlFor="name">Name</label>
                  <input
                    className="w-full border-b border-black bg-transparent sm:py-1 focus:outline-none"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Email */}
                <motion.div className="flex flex-col" variants={sharedVariants}>
                  <label className="text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input
                    className="w-full border-b border-black bg-transparent sm:py-1 focus:outline-none"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Phone */}
                <motion.div className="flex flex-col" variants={sharedVariants}>
                  <label className="text-sm font-medium mb-1" htmlFor="telephone">Phone</label>
                  <input
                    className="w-full border-b border-black bg-transparent sm:py-1 focus:outline-none"
                    name="telephone"
                    type="tel"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Password */}
                <motion.div className="flex flex-col" variants={sharedVariants}>
                  <label className="text-sm font-medium mb-1" htmlFor="password">Password</label>
                  <input
                    className="w-full border-b border-black bg-transparent sm:py-1 focus:outline-none"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Confirm Password */}
                <motion.div className="flex flex-col" variants={sharedVariants}>
                  <label className="text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    className="w-full border-b border-black bg-transparent sm:py-1 focus:outline-none"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Button + Login Link */}
                <motion.div variants={sharedVariants} className="flex justify-evenly">
                  <button className="relative overflow-hidden px-6 py-2 rounded-full text-white bg-black transition-all duration-500 hover:text-black
                        before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-white before:to-white before:transition-all 
                        before:duration-500 hover:before:w-full">
                    <span className="relative z-10">Register →</span>
                  </button>
                  <Link to="/login" className="transition-all underline pt-2 hover:scale-105">
                    Already a user <span className='font-bold'> LOGIN</span>
                  </Link>
                </motion.div>
                {/* Message */}
                <motion.div className="min-h-[24px] text-m text-center text-red-600" variants={sharedVariants}>
                  {message}
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SignupPage;
