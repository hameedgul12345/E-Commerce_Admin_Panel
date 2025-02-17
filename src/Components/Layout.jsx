import React, { useState } from "react";

function Layout() {
  const [widthSection, setWidthSection] = useState("85%");
  const [widthAside, setWidthAside] = useState("15%");

  const [menu, setMenu] = useState(false);
  const [showProfile,setShowProfile]=useState(false)
  const setUIFull = () => {
    setWidthSection("100%");
    setWidthAside("0%");
    setMenu(!menu);
  };
  const setUIHalf = () => {
    setWidthSection("85%");
    setWidthAside("15%");
    setMenu(!menu);
  };
  return (
    <div className="w-full h-screensss ">
      <aside
        className="fixed top-0 left-0 bg-blue-600 h-screen"
        style={{ width: widthAside, overflow: "hidden",transition:'0.5s' }}
      >
        aside
      </aside>
      <section
        className="h-full"
        style={{ width: widthSection, marginLeft: widthAside,transition:'0.5s' }}
      >
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          {/* Left Side: Menu Icon & Brand */}
          <div className="flex items-center gap-3">
            {menu ? (
              <i className="ri-menu-2-line" onClick={setUIHalf}></i>
            ) : (
              <i className="ri-menu-line" onClick={setUIFull}></i>
            )}
            <h1 className="text-xl font-bold">E-com</h1>
          </div>

          {/* Right Side: Profile Picture */}
          <div onClick={()=>setShowProfile(!showProfile)} className="w-10 h-10 rounded-full overflow-hidden border">
            <img
              src="/images/profile.jpg" // Replace with actual profile image
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </nav>
       {/* {showProfile&&<div style={} className="fixed right-0 top-18 w-[200px] h-[300px] bg-amber-500">hdjsjfjhdsja</div> */}
{/*      
      } */}
       <div className={`fixed right-0 top-18 w-[200px] h-[200px] shadow-lg rounded-md p-4 transform transition-all duration-500 ${
            showProfile ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}>
          <div className="flex justify-evenly flex-col gap-2 items-center ">
          <img
              src="/images/profile.jpg" // Replace with actual profile image
              alt="Profile"
              className="w-10 h-10 object-cover  rounded-full overflow-hidden border"
              //  className="w-10 h-10 rounded-full overflow-hidden border"
            />
          <h1 className="text-2xl font-semibold">Hameed Gul</h1>
           <p className=" font-semibold">MERN Stack Engineer</p>
           <hr />
           <i className="ri-logout-circle-line font-semibold"></i>
          </div>
          </div>
      </section>
    </div>
  );
}

export default Layout;
