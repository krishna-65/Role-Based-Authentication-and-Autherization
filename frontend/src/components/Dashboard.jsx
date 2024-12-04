import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false); // State to control profile visibility
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      } else {
        try {
          const res = await axios.get("http://localhost:3000/api/users", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(res.data.user);
        } catch (error) {
          console.error("Error fetching user data:", error);
          navigate("/login");
        }
      }
    };
    getData();
  }, [navigate]);

  const getAllUser = async () => {
    try {
      const data = await axios.get("http://localhost:3000/api/users/getALLUsers", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) {
    return <div className="flex justify-center items-center w-full h-screen">Loading...</div>;
  }

  return (
    <div className="p-8 bg-[#1f1f1f] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}!</h1>
      <p className="mb-4">
        You are logged in as: <strong>{user.role}</strong>
      </p>

      {user.role === "Admin" && (
        <div className="bg-[#333] shadow-md p-4 rounded mb-4">
          <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
          <ul className="list-disc ml-6">
            <li>View all users</li>
            <li>Manage permissions</li>
            <li>Access logs</li>
            <button
              onClick={() => getAllUser()}
              className="mt-2 px-5 rounded-md py-2 bg-blue-500 hover:scale-95 hover:font-semibold transition-all duration-200"
            >
              View All Users
            </button>
          </ul>
        </div>
      )}

      {user.role === "User" && (
        <div className="bg-[#333] shadow-md p-4 rounded mb-4">
          <h2 className="text-xl font-semibold mb-2">User Dashboard</h2>
          <ul className="list-disc ml-6">
            <li>View your profile</li>
            <li>Update account settings</li>
            <li>Explore available resources</li>
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="mt-2 px-5 rounded-md py-2 bg-blue-500 hover:scale-95 hover:font-semibold transition-all duration-200"
            >
              {showProfile ? "Hide Profile" : "View Your Profile"}
            </button>
          </ul>
        </div>
      )}

      {showProfile && user.role === "User" && (
        <div className="bg-[#333] shadow-md p-4 rounded mb-4">
          <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      )}

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:scale-95 hover:font-semibold transition-all duration-200"
      >
        Logout
      </button>

      {user.role === "Admin" &&
        users.length > 0 &&
        users.map((user, key) => (
          <div key={key} className="bg-[#333] shadow-md p-4 rounded mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
