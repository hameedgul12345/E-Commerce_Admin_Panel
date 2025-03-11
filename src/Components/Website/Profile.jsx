// import Layout from "./Layout";
// import firebaseAppConfig from "../../util/firebase-config";
// import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   where,
//   query,
//   doc,
//   updateDoc,
// } from "firebase/firestore";
// import profileImage from "../../util/Profile";
// const auth = getAuth(firebaseAppConfig);
// const db = getFirestore(firebaseAppConfig);

// const Profile = () => {
//   const [session, setSession] = useState(null);
//   const navigate = useNavigate();

//   const [formValue, setFormValue] = useState({
//     fullname: "",
//     email: "",
//     mobile: "",
//   });

//   const [addressFormValue, setAddressFormValue] = useState({
//     address: "",
//     city: "",
//     state: "",
//     country: "",
//     pincode: "",
//     userID: "",
//   });

//   const handleAddressChanges = (e) => {
//     const { name, value } = e.target;
//     setAddressFormValue((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleChanges = (e) => {
//     const { name, value } = e.target;
//     setFormValue((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       console.log("Selected file:", file.name);
//     }
//   };
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         setSession(user);
//         console.log(user);
//         setFormValue({
//           fullname: user.displayName || "",
//           email: user.email || "",
//           mobile: "",
//         });
//         setAddressFormValue((prev) => ({
//           ...prev,
//           userID: user.uid,
//         }));

//         // Fetch address data safely
//         try {
//           const col = collection(db, "addresses");
//           const q = query(col, where("userID", "==", user.uid)); // Use `user.uid` instead of `session.uid`
//           const snapshot = await getDocs(q);
//           snapshot.forEach((doc) => {
//             const address = doc.data();
//             setAddressFormValue({
//               ...addressFormValue,
//               ...address,
//             });
//             addressFormValue;
//           });
//         } catch (err) {
//           console.error("Error fetching addresses:", err);
//         }
//       } else {
//         setSession(false);
//         navigate("/login");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const saveProfileInfo = async (e) => {
//     e.preventDefault();
//     try {
//       const profileInfo = await addDoc(
//         collection(db, "profileInfo"),
//         formValue
//       );
//       console.log("saved:");
//     } catch (err) {
//       console.error("Error saving address:", err);
//     }
//   };

//   const saveProfileAddressInfo = async (e) => {
//     e.preventDefault();
//     try {
//       const address = await addDoc(
//         collection(db, "Addresses"),
//         addressFormValue
//       );
//       console.log("Address saved:", address.id);
//     } catch (err) {
//       console.error("Error saving address:", err);
//     }
//   };
//   const uploadProfileImage = async (e, profile) => {
//     const input = e.target;
//     const file = input.files[0];
//     const path = `products/${Date.now()}.png`;
//     const url = await profileImage(file, "demo.png");
//     setFormValue({
//       ...formValue,
//       profileUrl: url,
//     });
//     setAddressFormValue({
//       ...setAddressFormValue,
//       setFormValue,
//     });
//     console.log(formValue);
//     updateProfile(addressFormValue);
//   };
//   const updateProfile = async (addressFormValue) => {
//    const ref=doc(db,"addresses",session.uid)
//    await updateDoc(ref,addressFormValue)
//   };
//   return (
//     <Layout>
//       <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12">
//         <h1 className="text-3xl font-semibold">Profile</h1>
//         <hr className="my-6" />

//         {/* <div className="w-24 h-24 mx-auto relative mb-6">
//           <img src="/images/avt.avif" className="rounded-full w-24 h-24" alt="Profile" />
//           <input
//             type="file"
//             accept="image/*"
//             className="opacity-0 absolute top-0 left-0 w-full h-full"
//             onChange={handleImageChange}
//           />
//         </div> */}
//         <div className="relative w-[100px] h-[100px] mx-auto">
//           <img
//             src={formValue.profileUrl || "/images/profile.png"}
//             alt="updload your Profile Picture"
//             className="w-[100px] h-[100px] object-cover rounded-full "
//           />
//           <input
//             type="file"
//             className="w-full h-full absolute rounded-full top-0 left-0 opacity-0 bg-amber-500 "
//             onChange={(e) => uploadProfileImage(e, session)}
//           />
//         </div>

//         <form className="grid grid-cols-2 gap-6">
//           <div className="flex flex-col gap-2">
//             <label className="text-lg font-semibold">Fullname</label>
//             <input
//               required
//               name="fullname"
//               className="p-2 rounded border"
//               value={formValue.fullname}
//               onChange={handleChanges}
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-lg font-semibold">Email</label>
//             <input
//               required
//               name="email"
//               type="email"
//               className="p-2 rounded border"
//               value={formValue.email}
//               readOnly
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-lg font-semibold">Mobile</label>
//             <input
//               required
//               name="mobile"
//               type="number"
//               className="p-2 rounded border"
//               value={formValue.mobile}
//               onChange={handleChanges}
//             />
//           </div>

//           <button
//             onClick={saveProfileInfo}
//             className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-green-600"
//           >
//             Save
//           </button>
//         </form>
//       </div>

//       <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12">
//         <h1 className="text-3xl font-semibold">Delivery Address</h1>
//         <hr className="my-6" />

//         <form className="grid grid-cols-2 gap-6">
//           {Object.keys(addressFormValue).map(
//             (key) =>
//               key !== "userID" && (
//                 <div key={key} className="flex flex-col gap-2">
//                   <label className="text-lg font-semibold">
//                     {key.charAt(0).toUpperCase() + key.slice(1)}
//                   </label>
//                   <input
//                     required
//                     name={key}
//                     type={key === "pincode" ? "number" : "text"}
//                     className="p-2 rounded border"
//                     value={addressFormValue[key]}
//                     onChange={handleAddressChanges}
//                   />
//                 </div>
//               )
//           )}

//           <button
//             onClick={saveProfileAddressInfo}
//             className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-green-600"
//           >
//             Save
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Profile;

import Layout from "./Layout";
import firebaseAppConfig from "../../util/firebase-config";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../../util/Profile";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  where,
  query,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import Swal from "sweetalert2";

const auth = getAuth(firebaseAppConfig);
const db = getFirestore(firebaseAppConfig);

const Profile = () => {
  const [session, setSession] = useState(null);
  const [docId, setDocId] = useState("");
  const [isAddress, setIsAddress] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();
  const [updateProfileUI, setUpdateProfileUI] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    userId: "",
  });
  const uploadProfileImage = async (e, profile) => {
    const input = e.target;
    const file = input.files[0];
    const path = `products/${Date.now()}.png`;
    const url = await profileImage(file, "demo.png");

    try {
      

      // Update the user's profile with the new photo URL
      await updateProfile(session, { photoURL: url });

      // Save the URL to Firestore
      const userRef = doc(db, "addresses", session.uid);
      await updateDoc(userRef, { profileUrl: url });

      // Update UI state
      setFormData((prev) => ({
        ...prev,
        profileUrl: url,
      }));
      console.log(url);
      isUpdated(!isUpdated);
      Swal.fire("Success!", "Profile picture updated successfully.", "success");
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire("Error", "Failed to upload profile picture.", "error");
    }
  };
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setSession(user);
  //       setFormData((prev) => ({
  //         ...prev,
  //         fullname: user.displayName || "",
  //         mobile: user.phoneNumber || "",
  //         email: user.email,
  //         userId: user.uid,
  //       }));
  //     } else {
  //       navigate("/login");
  //     }
  //   });
  // }, [navigate]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
        setFormData((prev) => ({
          ...prev,
          fullname: user.displayName || "",
          mobile: user.phoneNumber || "",
          email: user.email,
          userId: user.uid,
          role:"user",
          profileUrl: user.photoURL || "", // Load profile image from Firebase Auth
        }));
      } else {
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    const fetchAddress = async () => {
      if (session) {
        const col = collection(db, "addresses");
        const q = query(col, where("userId", "==", session.uid));
        const snapshot = await getDocs(q);
        setIsAddress(!snapshot.empty);

        snapshot.forEach((doc) => {
          setDocId(doc.id);
          setFormData((prev) => ({
            ...prev,
            ...doc.data(),
          }));
        });
      }
    };
    fetchAddress();
  }, [session, isUpdated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProfileInfo = async (e) => {
    e.preventDefault();
    await updateProfile(auth.currentUser, {
      displayName: formData.fullname,
      phoneNumber: formData.mobile,
    });
    Swal.fire({ icon: "success", title: "Profile Saved!" });
  };

  const saveAddress = async (e) => {
    e.preventDefault();
    try {
      if (isAddress) {
        await updateDoc(doc(db, "addresses", docId), formData);
        Swal.fire({ icon: "success", title: "Address Updated!" });
      } else {
        setFormData({ ...formData, createdAt: serverTimestamp() });
        await addDoc(collection(db, "addresses"), formData);
        setIsAddress(true);
        setIsUpdated(!isUpdated);
        Swal.fire({ icon: "success", title: "Address Saved!" });
      }
    } catch (err) {
      Swal.fire({ icon: "error", title: "Failed!", text: err.message });
    }
  };

  return (
    <Layout>
      <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12 border">
        <div className="flex gap-3">
          <i className="ri-user-line text-4xl"></i>
          <h1 className="text-3xl font-semibold">Profile</h1>
        </div>

        <hr className="my-6" />

        <div className="relative w-[100px] h-[100px] mx-auto">
          <img
            //  src={formValue.profileUrl || "/images/profile.png"}
            // src="/images/profile.png"
            src={
              formData.profileUrl || session?.photoURL || "/images/profile.png"
            }
            alt="updload your Profile Picture"
            className="w-[100px] h-[100px] object-cover rounded-full "
          />
          <input
            type="file"
            className="w-full h-full absolute rounded-full top-0 left-0 opacity-0 bg-amber-500 "
            onChange={(e) => uploadProfileImage(e, session)}
          />
        </div>
        <form onSubmit={saveProfileInfo} className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Fullname</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Fullname</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              placeholder="Email"
              className="w-full p-2 border rounded-md bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Fullname</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className=" bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Save Profile
          </button>
        </form>
      </div>

      <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12 border">
        <div className="flex gap-3">
          <i className="ri-link-unlink-m text-4xl"></i>
          <h1 className="text-3xl font-semibold">Delivery Address</h1>
        </div>

        <hr className="my-6" />
        <form onSubmit={saveAddress} className="grid grid-cols-2 gap-6">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            required
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Save Address
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Profile;
