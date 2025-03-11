import React, { useEffect, useState } from "react";
import Layout from "./Layout";

import firebaseAppCinfig from "../../util/firebase-config";
import {
  getFirestore,
  addDoc,
  collection,
  getDoc,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const db = getFirestore(firebaseAppCinfig);
const auth = getAuth(firebaseAppCinfig);

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [session, setSession] = useState(null);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  useEffect(() => {
    const render = async () => {
      if (session) {
        const col = collection(db, "carts");
        const q = query(col, where("userID", "==", session.uid));
        const snapshot = await getDocs(q);
        // snapshot.forEach((doc)=>{
        //   const document=doc.data()
        //   console.log(document)
        // })
        const tem = [];
        if (!snapshot.empty) {
          snapshot.forEach((doc) => {
            console.log("Cart Item:", doc.data());
            const document = doc.data();
            document.cartID = doc.id;
            tem.push(document);
          });
          setCartItems(tem);
        } else {
          console.log("No items found in cart");
        }
      }
    };
    render();
  }, [session, updateUI]);

  const totalAmount = (items) => {
    let sum = 0;
    for (let item of items) {
      let amount = Math.round(item.price);
      sum = sum + amount;
    }
    return sum;
  };

  const deleteCart = async (id) => {
    try {
      const ref = doc(db, "carts", id);
      await deleteDoc(ref);
      setUpdateUI(!updateUI);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-lg">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          {" "}
          🛒 Cart{" "}
        </h2>
        <div className="mt-4">
          {cartItems.map((item, index) => (
            <div key={index} className="mb-4 p-4 flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  <span className="text-xl font-bold">₹{item.price}</span>
                  <span className="line-through ml-2 text-gray-400">
                    ₹{item.originalPrice}
                  </span>
                </p>
                <p className="text-green-600 text-sm">{item.discount}</p>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2"
                onClick={() => {
                  deleteCart(item.cartID);
                }}
              >
                Remove{" "}
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4 p-4 border-t-0">
          <span className="text-xl font-semibold">
            Total : ₹{totalAmount(cartItems)}
          </span>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2">
            {" "}
            Buy Now{" "}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
