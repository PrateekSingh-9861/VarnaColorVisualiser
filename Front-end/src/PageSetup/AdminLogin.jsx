import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/admin/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Save token in localStorage or cookies
      localStorage.setItem('adminToken', data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Admin Login - Varna</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm">{error}</div>)}
            
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
