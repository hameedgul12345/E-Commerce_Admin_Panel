import React from "react";
import Layout from "./Layout";

function Customers() {
  const payments = [
    {
      name: "Er Saurav",
      email: "ersaurav@gmail.com",
      mobile: "+91 9472395194",
      date: "12-10-2024 10:15:14 AM",
      avatar: "/images/profile.jpg",
      amount: 500, // Payment amount
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      mobile: "+91 9876543210",
      date: "11-10-2024 09:30:45 AM",
      avatar: "/images/profile.jpg",
      amount: 750,
    },
    {
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      mobile: "+91 8123456789",
      date: "10-10-2024 03:20:10 PM",
      avatar: "/images/profile.jpg",
      amount: 600,
    },
  ];

  const handlePayment = (name, amount) => {
    alert(`Payment of ₹${amount} made by ${name}`);
  };

  return (
    <Layout>
      <div className="container mx-auto mt-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg">
            {/* Table Header */}
            <thead>
              <tr className="bg-red-600 text-white text-left">
                <th className="p-2">Customer's Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Mobile</th>
                <th className="p-2">Date</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Payment</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {payments.map((payment, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition-all`}
                >
                  <td className="p-2 flex items-center gap-2">
                    <img
                      src={payment.avatar}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-sm">{payment.name}</p>
                      <p className="text-xs text-gray-500">{payment.date}</p>
                    </div>
                  </td>
                  <td className="p-2 text-sm">{payment.email}</td>
                  <td className="p-2 text-sm">{payment.mobile}</td>
                  <td className="p-2 text-sm">{payment.date}</td>
                  <td className="p-2 text-sm font-semibold">₹{payment.amount}</td>
                  <td className="p-2">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                      onClick={() => handlePayment(payment.name, payment.amount)}
                    >
                      Pay Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Customers;
