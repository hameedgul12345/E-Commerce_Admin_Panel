import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import firebaseAppCinfig from "../../util/firebase-config";
import {
  getFirestore,
  addDoc,
  collection,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";
const db = getFirestore(firebaseAppCinfig);
const auth = getAuth(firebaseAppCinfig);

function WebProducts() {
  const [session, setSession] = useState(null);
  const [products, setProducts] = useState([]);
  const addToCart = async (product) => {
    try {
      product.userID = session.uid;
      await addDoc(collection(db, "carts"), product);
      console.log("added");
    } catch (err) {
      console.log(err);
    }
  };
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
      const snapshot = await getDocs(collection(db, "products"));
      const emptyArray = [];
      snapshot.forEach((doc) => {
        const obj = doc.data();
        obj.id = doc.id;
        emptyArray.push(obj);
      });
      console.log(emptyArray);
      setProducts(emptyArray);
    };
    render();
  }, []);
//   const buyNow = async (item) => {
//     try {
//         const { data } = await axios.post("http://localhost:8000/create-payment", {
//             amount: item.price - (item.price * item.discount) / 100, // Calculate discounted price
//             email: session?.email,  // Ensure session contains email
//             phone: session?.phone || "0000000000" // Use default if phone is missing
//         });
 
//         console.log("Payment Response:", data);
//     } catch (err) {
//         console.error("Payment Error:", err.response ? err.response.data : err.message);
//     }
//  };
 
  return (
    <Layout>
      <div className="text-center py-8 bg-white shadow-sm">
        <h2 className="text-2xl font-bold">All Products</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          accusantium iusto, consequatur, officiis sapiente iure nisi aspernatur
          est corporis dolor ratione adipisci.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>

              {/* <div className="mt-2 flex items-center">
                <span className="text-blue-600 font-bold text-lg">
                  ₹{product.price}
                </span>
                <span className="ml-2 text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="ml-2 text-green-600 text-sm">
                  {product.discount}
                </span>
              </div> */}
              <div className="flex gap-2 mt-1">
                <label>
                  ₹{product.price - (product.price * product.discount) / 100}
                </label>
                <del className="font-semibold">₹{product.price}</del>
                <label className="text-gray-600">
                  ({product.discount}% Off)
                </label>
              </div>
              <button
                // onClick={() => buyNow(product)}
                className="bg-green-600 rounded-sm w-[100%] mt-2.5 font-semibold p-2 text-white"
              >
                Buy Now
              </button>
              <button
                className="bg-red-600 rounded-sm w-[100%] mt-2.5 font-semibold p-2 text-white"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default WebProducts;
