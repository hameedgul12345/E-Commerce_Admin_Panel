import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const [widthSection, setWidthSection] = useState("85%");
  const [widthAside, setWidthAside] = useState("15%");
  const [menu, setMenu] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileSize, setMobileSize] = useState(0);  // Keeping from HEAD branch
  const location = useLocation();

  const links = [
    {

      title: "Products",
      link: "/products",
      icon: <i className="ri-shopping-cart-fill"></i>,
    },
    {
      title: "Order",
      link: "/order",
      icon: <i className="ri-order-play-fill"></i>,
    },
{
      title: "Dashboard",
      link: "/dashboard",
      icon: <i className="ri-dashboard-fill"></i>
    },
    
    {
      title: "Customers",
      link: "/customers",
      icon: <i className="ri-customer-service-fill"></i>
    },
    {
      title: "Products",
      link: "/products",
      icon: <i className="ri-shopping-cart-fill"></i>
    },
    {
      title: "Order",
      link: "/order",
      icon: <i className="ri-shape-line"></i>
    },
    {
      title: "Payments",
      link: "/payments",
      icon: <i className="ri-money-dollar-box-fill"></i>
    },
    {
      title: "Settings",
      link: "/settings",
      icon: <i className="ri-settings-5-fill"></i>
    },

  ];

  const setUIFull = () => {
    setWidthSection("100%");
    setWidthAside("0%");
    setMenu(false);
    setMobileSize(0);
  };

  const setUIHalf = () => {
    setWidthSection("85%");
    setWidthAside("15%");
    setMenu(true);
    setMobileSize("60%"); // Keeping from products branch
  };

  return (
    <div className="w-full h-screen">
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 h-screen text-white transition-all duration-500 bg-gray-800"
        style={{ width: widthAside, overflow: "hidden" }}
      >
        <div className="p-4">
          <img src="/images/logo2.png" alt="Logo" />
        </div>
        <div className="flex flex-col gap-4 w-full">
          {links.map((link, index) => (
            <Link
              key={index}
              className="p-4 w-full flex items-center gap-2"
              to={link.link}
              style={{
                backgroundColor: location.pathname === link.link ? "crimson" : "white",
                color: location.pathname === link.link ? "white" : "black",
              }}
            >
              {link.icon}
              <h1>{link.title}</h1>
            </Link>
          ))}
        </div>
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
              <i className="ri-menu-line cursor-pointer" onClick={setUIFull}></i>
            ) : (
              <i className="ri-menu-2-line cursor-pointer" onClick={setUIHalf}></i>
            )}
            <h1 className="text-xl font-bold">E-com</h1>
          </div>

          {/* Profile Picture */}
          <div onClick={() => setShowProfile(!showProfile)} className="w-10 h-10 rounded-full overflow-hidden border cursor-pointer">
            <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </nav>

        {/* Profile Dropdown */}
        <div className={`fixed right-5 top-14 w-[200px] h-[200px] bg-white shadow-lg rounded-md p-4 transform transition-all duration-500 ${
          showProfile ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}>
          <div className="flex flex-col items-center gap-2">
            <img src="/images/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full border" />
            <h1 className="text-lg font-semibold">Hameed Gul</h1>
            <p className="text-sm font-medium text-gray-600">MERN Stack Engineer</p>
            <hr className="w-full border-gray-300" />
            <i className="ri-logout-circle-line text-lg cursor-pointer"></i>
          </div>
        </div>

        {/* Render Children */}
        <div className="p-2">{children}</div>
      </section>
    </div>
  );
}

export default Layout;
