import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FeedbackPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/feedback', form);
      setMessage(res.data.message || 'Feedback submitted successfully!');
      setError(false);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error submitting feedback');
      setError(true);
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

    <motion.div className="h-screen w-screen px-4 flex pt-10 sm:pt-0 sm:items-center justify-center bg-[#F6F6F6]" initial="hidden" animate="visible" variants={sharedVariants}>

      <div className="sm:w-[60vw] w-full sm:h-[70vh] h-[75vh] flex-col rounded-2xl bg-[#EDEAE0] overflow-hidden border shadow-black shadow-2xl">
        <motion.h1 className="sm:text-5xl text-4xl crete-round-regular text-center mt-6" variants={sharedVariants}>
          FEEDBACK
        </motion.h1>

        <div className="flex flex-col sm:flex-row items-center justify-center">
          {/* Image Section */}
          <motion.div className="w-full sm:w-[50%] flex justify-center items-center" variants={sharedVariants}>
            <img src="/images/img-signuppage.png" alt="Feedback Illustration" className="w-[50%] sm:w-[80%] pt-3 sm:p-6 h-auto object-cover" />
          </motion.div>

          {/* Form Section */}
          <motion.div className="w-full sm:w-[50%] flex flex-col justify-center py-4 sm:py-8 px-6 sm:px-12" variants={sharedVariants}>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2 sm:space-y-5 w-full ">

              {/* Name */}
              <motion.div className="flex flex-col" variants={sharedVariants}>
                <label className="text-sm font-medium sm:mb-1" htmlFor="name">Name</label>
                <input className="w-full border-b border-black bg-transparent py-1 focus:outline-none"
                  name="name" type="text" value={form.name} placeholder="Enter your name" onChange={handleChange} required />
              </motion.div>

              {/* Email */}
              <motion.div className="flex flex-col" variants={sharedVariants}>
                <label className="text-sm font-medium sm:mb-1" htmlFor="email">Email</label>
                <input className="w-full border-b border-black bg-transparent py-1 focus:outline-none"
                  name="email" type="email" value={form.email} placeholder="Enter your email" onChange={handleChange} required />
              </motion.div>

              {/* Message */}
              <motion.div className="flex flex-col" variants={sharedVariants}>
                <label className="text-sm font-medium mb-1" htmlFor="message">Feedback</label>
                <textarea className="w-full border-b border-black bg-transparent py-1 focus:outline-none"
                  name="message" rows={window.innerWidth < 640 ? 3 : 4} // ternary: 3 rows on small screens, 4 on larger
                  value={form.message} placeholder="Write your feedback here..." required />

              </motion.div>

              {/* Submit Button and Link */}

              <motion.div variants={sharedVariants} className="flex justify-evenly items-center space-y-2 sm:space-y-0 sm:space-x-4 pt-2">

                <button className="relative overflow-hidden px-6 py-2 rounded-full text-white bg-black transition-all duration-500 hover:text-black
            before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-white before:to-white before:transition-all 
            before:duration-500 hover:before:w-full">
                  <span className="relative z-10">Submit →</span>
                </button>

                <Link to="/" className="transition-all underline hover:scale-105 text-center">
                  Back to Home
                </Link>
              </motion.div>

              {/* Message */}
              <motion.div className={`min-h-[24px] text-m text-center ${error ? 'text-red-600' : 'text-green-600'}`} variants={sharedVariants}> {message}
              </motion.div>
            </form>
          </motion.div>
        </div>


      </div>
    </motion.div>
  );
};

export default FeedbackPage;
