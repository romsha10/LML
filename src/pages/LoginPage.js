import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // This will allow navigation

function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // useNavigate hook for redirecting after login

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    try {
      // Send the entered password to the backend
      const { data } = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          password,
        }
      );
      // If the password is correct, the backend sends a token
      localStorage.setItem("token", data.token);
      // Redirect to the admin panel page
      navigate("/admin"); // Use navigate hook to redirect
    } catch (error) {
      setError("Invalid password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <form onSubmit={handleLogin}>
          {" "}
          {/* Form submission handled by handleLogin */}
          <input
            type="password"
            className="w-full p-2 border border-purple-200 rounded mb-4"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Capture the entered password
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit" // Use "submit" type to handle form submission
            className="w-full bg-purple-600 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
