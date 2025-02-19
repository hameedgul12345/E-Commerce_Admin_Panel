import React from "react";
import Layout from "./Layout";

function Customers() {
  const customers = [
    {
      name: "Er Saurav",
      email: "ersaurav@gmail.com",
      mobile: "+91 9472395194",
      date: "12-10-2024 10:15:14 AM",
      avatar: "/images/profile.jpg", // Replace with actual avatar path
    },
    {
      name: "Er Saurav",
      email: "ersaurav@gmail.com",
      mobile: "+91 9472395194",
      date: "12-10-2024 10:15:14 AM",
      avatar: "/images/profile.jpg",
    },
    {
      name: "Er Saurav",
      email: "ersaurav@gmail.com",
      mobile: "+91 9472395194",
      date: "12-10-2024 10:15:14 AM",
      avatar: "/images/profile.jpg",
    },
    {
      name: "Er Saurav",
      email: "ersaurav@gmail.com",
      mobile: "+91 9472395194",
      date: "12-10-2024 10:15:14 AM",
      avatar: "/images/profile.jpg",
    },
    {
      name: "Er Saurav",
      email: "ersaurav@gmail.com",
      mobile: "+91 9472395194",
      date: "12-10-2024 10:15:14 AM",
      avatar: "/images/profile.jpg",
    },
  ];

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
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition-all`}
                >
                  <td className="p-2 flex items-center gap-2">
                    <img
                      src={customer.avatar}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-sm">{customer.name}</p>
                      <p className="text-xs text-gray-500">{customer.date}</p>
                    </div>
                  </td>
                  <td className="p-2 text-sm">{customer.email}</td>
                  <td className="p-2 text-sm">{customer.mobile}</td>
                  <td className="p-2 text-sm">{customer.date}</td>
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
