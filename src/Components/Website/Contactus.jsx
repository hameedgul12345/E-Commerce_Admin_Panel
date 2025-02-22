import React from 'react'
import Layout from './Layout'

function Contactus() {
  return (
    <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Banner Image */}
        <div className="relative">
          <img
            src="/images/contactus.jpg"
            alt="Contact Us"
            className="w-full h-48 object-cover"
          />
          
        </div>

        {/* Form */}
        <div className="p-6">
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Joh Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email ID</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Contactus