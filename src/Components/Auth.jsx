import React, { useState } from "react";

const AuthPage = () => {
  const [secret, setSecret] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Accessing with secret: ${secret}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center bg-white p-10 rounded-2xl shadow-lg w-3/4 max-w-4xl">
        {/* Illustration */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://undraw.co/illustrations"
            alt="Admin Access"
            className="w-full"
          />
        </div>
        {/* Form Section */}
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-2xl font-semibold mb-4">Admin Console !</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter admin secret"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Access Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
