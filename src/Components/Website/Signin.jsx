import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import firebaseAppCinfig from "../../util/firebase-config";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';
const auth = getAuth(firebaseAppCinfig);

const Signin = () => {
  const [passwordType, setPasswordType] = useState("password");
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
const signin=async(e)=>{
  try{
    e.preventDefault()
    const user=await signInWithEmailAndPassword(auth,formData.email,formData.password)
   // Success Alert
         Swal.fire({
           icon: "success",
           title: "Signup Successful!",
           text: "Your account has been created successfully.",
           confirmButtonColor: "#3085d6",
         });
   navigate('/')
    console.log(user)
  }catch(err){ Swal.fire({
          icon: "error",
          title: "Signup Failed!",
          text: err.message,
          confirmButtonColor: "#d33",
        });
  }
}
const handleChange=(e)=>{
  const input=e.target
  const name=input.name
  const value=input.value
  
  setFormData({
    ...formData,
    [name]:value
  })
  
}
  return (
    <div className="w-full h-screen">
      <div className="flex  w-full bg-white p-4  gap-4  h-screen overflow-hidden w-3/4 ">
        <div className="w-1/2 p-10 flex flex-col justify-center shadow-xl rounded-xl border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Signin</h2>
          <p className="text-gray-600 mb-6">
            Enter profile detail to login
          </p>

          <form onSubmit={signin}>
          

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                placeholder="example@mail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6 relative">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type={passwordType}
                placeholder="********"
                onChange={handleChange}
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() =>
                  setPasswordType(
                    passwordType === "password" ? "text" : "password"
                  )
                }
                type="button"
                className="absolute right-4 top-10 "
              >
                {
                    passwordType==="password"?<i className="ri-eye-fill"></i>:<i className="ri-eye-off-fill"></i>
                }
              </button>
            </div>

            <button
              type="submit"
              className="w-24 bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 transition duration-300"
            >
              Signin
            </button>
          </form>
          <div>
            Don't have an account ? <Link to='/signup' className='text-blue-600 text-lg font-semibold'>Signup</Link>
          </div>
        </div>
        <div className="w-1/2  p-4 rounded-xl border border-gray-300  flex items-center justify-center">
          <img
            src="/images/signin.svg"
            alt="Signup Illustration"
            className="w-[500px] h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
