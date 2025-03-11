import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import firebaseAppCinfig from "../util/firebase-config";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import moment from "moment";
const db = getFirestore(firebaseAppCinfig);

function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const render = async () => {
      const snapshot = await getDocs(collection(db, "addresses"));
      const tem = [];
      snapshot.forEach((doc) => {
        const customer = doc.data();
        customer.id = doc.id;
        tem.push(customer);
      });
      setCustomers(tem);
     
    };
    render();
    console.log(customers);
  }, [customers]);
  return (
    <Layout>
      <h1>Customers</h1>
      <div className="container mx-auto mt-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg">
            {/* Table Header */}
            <thead>
              <tr
                style={{ background: "crimson" }}
                className="text-white text-left"
              >
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
                      src={customer.profileUrl}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-sm">{customer.fullname}</p>
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
