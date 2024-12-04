import { useState } from 'react';
import apiClient from '../api/apiClient';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'User' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post('/auth/register', formData);
      alert('User registered successfully');
      Navigate('/login');
    } catch (error) {
      alert('Error registering user: ' + error.response?.data?.message);
    }
  };

  return (
    <div className='flex justify-center items-center w-11/12 mx-auto h-screen'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-[#1f1f1f] rounded-3xl  ">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
      <input name="name" placeholder="Name" className="w-full mb-2 rounded-md p-2" onChange={handleChange} />
      <input name="email" placeholder="Email" className="w-full mb-2 rounded-md p-2" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" className="w-full rounded-md mb-2 p-2" onChange={handleChange} />
      <select name="role" className="w-full mb-4 p-2 rounded-md" onChange={handleChange}>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>
      <button type="submit" className="bg-blue-500 mt-2 ml-4 mr-4 w-[90%] text-white px-4 py-2 rounded-md duration-200 hover:font-semibold transition-all hover:scale-95 mb-3">Register</button>
                 <div className='flex justify-center'>   <Link to="/login" className="text-center ">Already have an account?</Link></div>
    </form>
    </div>
  );
};

export default Register;
