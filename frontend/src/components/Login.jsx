import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    try {
      console.log(formData);
      const data = await apiClient.post('/auth/login', formData);
      console.log(data);
      localStorage.setItem('token', data.data.token);
      alert('Login successful');
      navigate('/');
    } catch (error) {
      alert('Error logging in: ' + error.response?.data?.message);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-[#1f1f1f] rounded-3xl m-5">
        <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full mb-2 p-2 rounded-md"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full rounded-md mb-2 p-2"
          onChange={handleChange}
        />
        <button
          type="submit"
          className={`bg-blue-500 mt-2 ml-4 mr-4 w-[90%] text-white px-4 py-2 rounded-md duration-200 hover:font-semibold transition-all hover:scale-95 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <div className="flex justify-center">
          <Link to="/register" className="text-center">
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
