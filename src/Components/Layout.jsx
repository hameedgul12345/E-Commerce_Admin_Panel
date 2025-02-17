import React, { useState } from "react";

function Layout({ children }) {
  const [widthSection, setWidthSection] = useState("85%");
  const [widthAside, setWidthAside] = useState("15%");
  const [menu, setMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

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
    <div className="w-full h-screen">
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 bg-blue-600 h-screen text-white transition-all duration-500"
        style={{ width: widthAside, overflow: "hidden" }}
      >
        <div className="p-4">Sidebar Content</div>
      </aside>

      {/* Main Content */}
      <section
        className="h-full transition-all duration-500"
        style={{ width: widthSection, marginLeft: widthAside }}
      >
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {menu ? (
              <i className="ri-menu-2-line cursor-pointer" onClick={setUIHalf}></i>
            ) : (
              <i className="ri-menu-line cursor-pointer" onClick={setUIFull}></i>
            )}
            <h1 className="text-xl font-bold">E-com</h1>
          </div>

          {/* Profile Picture */}
          <div onClick={() => setShowProfile(!showProfile)} className="w-10 h-10 rounded-full overflow-hidden border cursor-pointer">
            <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </nav>

        {/* Profile Dropdown */}
        <div
          className={`fixed right-5 top-14 w-[200px] h-[200px] bg-white shadow-lg rounded-md p-4 transform transition-all duration-500 ${
            showProfile ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <img src="/images/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full border" />
            <h1 className="text-lg font-semibold">Hameed Gul</h1>
            <p className="text-sm font-medium text-gray-600">MERN Stack Engineer</p>
            <hr className="w-full border-gray-300" />
            <i className="ri-logout-circle-line text-lg cursor-pointer"></i>
          </div>
        </div>

        {/* Render Children */}
        <div className="p-6">{children}</div>
      </section>
    </div>
  );
}

export default Layout;
