// LoginPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', form);
      localStorage.setItem('authToken', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setMessage(res.data.message);
      navigate('/userdashboard');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
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
    <motion.div className="h-screen w-screen flex items-center justify-center bg-[#F6F6F6]" initial="hidden" animate="visible" variants={sharedVariants}>
      <div className="w-[60vw] h-[75vh] flex-col rounded-2xl bg-[#EDEAE0] overflow-hidden border shadow-black shadow-2xl">
        <motion.h1 className="text-6xl crete-round-regular text-center mt-6 mb-6" variants={sharedVariants}>
          LOGIN
        </motion.h1>
        <div className="flex">
          <motion.div className="w-[50%] flex items-center justify-center" variants={sharedVariants}>
            <img src="/images/img-signuppage.png" alt="Login Illustration" className="h-full p-6 object-cover" />
          </motion.div>
          <motion.div className="w-[50%] flex flex-col pt-8 justify-center px-8" variants={sharedVariants}>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5 w-full">
              <motion.div className="flex flex-col" variants={sharedVariants}>
                <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>
                <input name="email" type="email" placeholder="Enter your email" onChange={handleChange} required className="w-full border-b border-black bg-transparent py-1 focus:outline-none" />
              </motion.div>
              <motion.div className="flex flex-col" variants={sharedVariants}>
                <label htmlFor="password" className="text-sm font-medium mb-1">Password</label>
                <input name="password" type="password" placeholder="Enter your password" onChange={handleChange} required className="w-full border-b border-black bg-transparent py-1 focus:outline-none" />
              </motion.div>
              <motion.div variants={sharedVariants} className="flex justify-evenly">
                <button type="submit" className="relative overflow-hidden px-6 py-2 rounded-full text-white bg-black transition-all duration-500 hover:text-black before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-white before:to-white before:transition-all before:duration-500 hover:before:w-full">
                  <span className="relative z-10">Login →</span>
                </button>
                <Link to="/signup" className="transition-all underline pt-2 hover:scale-105">
                  New User? <span className='font-bold'>SIGN UP</span>
                </Link>
              </motion.div>
            </form>
            <motion.div className="min-h-[24px] text-m text-center text-red-600" variants={sharedVariants}>
              {message}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
