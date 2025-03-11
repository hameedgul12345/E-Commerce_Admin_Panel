import React, { useState } from "react";
import firebaseAppConfig from "../../util/firebase-config";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Signup = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const auth = getAuth(firebaseAppConfig);

  const signup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await updateProfile(auth.currentUser,{displayName:formData.fullname})
      // Success Alert

      Swal.fire({
        icon: "success",
        title: "Signup Successful!",
        text: "Your account has been created successfully.",
        confirmButtonColor: "#3085d6",
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
      
      // Error Alert
      Swal.fire({
        icon: "error",
        title: "Signup Failed!",
        text: err.message,
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(null);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row bg-white p-6 md:p-10 gap-6 md:gap-10 shadow-xl rounded-xl border border-gray-300 w-full max-w-4xl">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {error && (
            <div className="p-4">
              <h3 className="text-red-600 text-center">{error}</h3>
            </div>
          )}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">New User</h2>
          <p className="text-gray-600 mb-6">Create your account to start shopping</p>

          <form onSubmit={signup}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Fullname</label>
              <input
                type="text"
                onChange={handleChanges}
                placeholder="Enter your name"
                name="fullname"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email ID</label>
              <input
                type="email"
                name="email"
                onChange={handleChanges}
                required
                placeholder="example@mail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6 relative">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type={passwordType}
                name="password"
                placeholder="********"
                onChange={handleChanges}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")}
                type="button"
                className="absolute right-4 top-10"
              >
                {passwordType === "password" ? (
                  <i className="ri-eye-fill"></i>
                ) : (
                  <i className="ri-eye-off-fill"></i>
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-24 bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 transition duration-300 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
              ) : (
                "Signup"
              )}
            </button>
          </form>

          <div>
            Already have an account? <Link to="/signin" className="text-blue-600 text-lg font-semibold">Signin</Link>
          </div>
        </div>

        {/* Right Side Image (Fixed) */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/images/signup.svg"
            alt="Signup Illustration"
            className="w-[300px] md:w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
