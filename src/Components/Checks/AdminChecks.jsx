import React, { useEffect, useState } from "react";
import firebaseAppCinfig from "../../util/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { Outlet, useNavigate } from "react-router-dom";
const auth = getAuth(firebaseAppCinfig);
const db = getFirestore(firebaseAppCinfig);
function AdminChecks() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [isAdmin,setIsAdmin]=useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        navigate("/");
        return false;
      }
    });
  }, []);

  useEffect(() => {
    const fetchAddresses = async () => {
     
          const colRef = collection(db, "addresses"); // Correct syntax for collection reference
          const q = query(colRef, where("userId", "==", session.uid));
          const snapshot = await getDocs(q);
          let role = null;
          snapshot.forEach((doc) => {
            const address = doc.data();
            role = address.role;
          });
          if (role === "user") {
            navigate("/profile");
            return false;
          } else {
            setIsAdmin(true)
          }
        } 

    
  
    fetchAddresses(); // Call the function
  }, [session]);
if(isAdmin) return <Outlet/>
  return <div>AdminChecks</div>;
}

export default AdminChecks;
