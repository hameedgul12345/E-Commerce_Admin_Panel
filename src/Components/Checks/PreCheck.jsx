import React, { useEffect, useState } from "react";
import firebaseAppCinfig from "../../util/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate,Outlet } from "react-router-dom";
function PreCheck() {
  const auth = getAuth(firebaseAppCinfig);
  const [session, setSession] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(false);
      }
    });
  }, []);

  if (session === null)
    return (
        <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          <div className="relative w-32 h-32">
            <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin" style={{animationDuration: '3s'}} />
            <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm" />
        </div>
      </div>
    
    );
    if(session)
        return(
    <Navigate to={'/'}/>
    )
    return(
        <Outlet/>
    )
}

export default PreCheck;
