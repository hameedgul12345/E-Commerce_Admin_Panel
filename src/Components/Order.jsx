import React, { useState } from "react";
import Layout from "./Layout";

function Order() {
  const [orders, setOrders] = useState([
    {
      id: "#ORD12345",
      name: "Ayo Adewale",
      email: "ayo.adewale@gmail.com",
      mobile: "+234 8023456789",
      product: "Apple MacBook Pro",
      amount: "₹1,50,000",
      date: "15-09-2024 09:30:45 AM",
      status: "Pending",
    },
    {
      id: "#ORD12346",
      name: "Kwame Mensah",
      email: "kwame.mensah@yahoo.com",
      mobile: "+233 5432109876",
      product: "Dell XPS 15",
      amount: "₹1,20,000",
      date: "16-09-2024 11:00:30 AM",
      status: "Completed",
    },
    {
      id: "#ORD12347",
      name: "Fatima Yusuf",
      email: "fatima.yusuf@outlook.com",
      mobile: "+234 9098765432",
      product: "HP Spectre x360",
      amount: "₹1,10,000",
      date: "17-09-2024 02:45:15 PM",
      status: "Cancelled",
    },
    {
      id: "#ORD12348",
      name: "Mohammed Omar",
      email: "mohammed.omar@gmail.com",
      mobile: "+254 701234567",
      product: "Lenovo ThinkPad X1",
      amount: "₹98,000",
      date: "18-09-2024 04:20:10 PM",
      status: "Pending",
    },
  ]);

  return (
    <Layout>
        <h1 className="px-4 font-semibold text-2xl">Order</h1>
      <div className="max-w-full overflow-x-auto py-2 px-4">
        <table className="table-auto w-full border border-gray-200 shadow-lg">
          {/* Table Head */}
          <thead>
            <tr className="bg-red-600 text-white text-left text-sm">
              <th className="p-2 whitespace-nowrap">Order Id</th>
              <th className="p-2 whitespace-nowrap">Customer’s Name</th>
              <th className="p-2 whitespace-nowrap">Email</th>
              <th className="p-2 whitespace-nowrap">Mobile</th>
              <th className="p-2 whitespace-nowrap">Product</th>
              <th className="p-2 whitespace-nowrap">Amount</th>
              <th className="p-2 whitespace-nowrap">Date</th>
              <th className="p-2 whitespace-nowrap">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white text-sm">
            {orders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-2 whitespace-nowrap">{order.id}</td>
                <td className="p-2 whitespace-nowrap">{order.name}</td>
                <td className="p-2 whitespace-nowrap">{order.email}</td>
                <td className="p-2 whitespace-nowrap">{order.mobile}</td>
                <td className="p-2 whitespace-nowrap">{order.product}</td>
                <td className="p-2 whitespace-nowrap">{order.amount}</td>
                <td className="p-2 whitespace-nowrap">{order.date}</td>
                <td className="p-2 whitespace-nowrap">
                 <select className="border p-2 border-gray-300" name="" id="">
                    <option value="">Pending</option>
                    <option value="">Proccessing</option>
                    <option value="">Dispatched</option>
                    <option value="">Return</option>
                    
                 </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Order;
