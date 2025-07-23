// src/components/login/LoginForm.jsx

import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulate backend response
    if (email === "test@example.com" && password === "123456") {
      const fakeToken = "abc123.jwt.token";
      const userData = { name: "Ruhit", email };

      login(userData, fakeToken); // save token & user in sessionStorage
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="w-full max-w-sm p-6 m-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">Login</h2>
      <form onSubmit={handleLogin} className="mt-6">
        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
          <input
            type="email"
            className="block w-full px-4 py-2 mt-2 border rounded-md bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2 border rounded-md bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white bg-blue-600 rounded hover:bg-blue-500">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
