import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../../util/firebase-config";
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";

const auth = getAuth(firebaseAppConfig);

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  const mobileLink = (href) => {
    navigate(href);
    setOpen(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setSession(user || false);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  const menus = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/webproducts" },
    { label: "Category", href: "/category" },
    { label: "Contact us", href: "/contactus" },
  ];

  if (session === null) {
    return (
      <div className="h-[100vh] bg-gray-300 flex justify-center items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav className="sticky p-4 top-0 left-0 shadow-lg bg-white">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <img src="/images/logo2.png" className="w-[100px]" alt="Logo" />
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <i className="ri-menu-3-fill text-3xl"></i>
          </button>
          <ul className="md:flex gap-6 items-center hidden">
            {menus.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="block py-3 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {!session ? (
              <>
                <Link
                  className="block py-3 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                  to="/signin"
                >
                  Signin
                </Link>
                <Link
                  className="bg-blue-600 py-3 px-10 text-md font-semibold text-white block text-center hover:bg-rose-600"
                  to="/signup"
                >
                  Signup
                </Link>
              </>
            ) : (
              <div className="relative">
                <div
                  onClick={() => setShowProfile(!showProfile)}
                  className="w-10 h-10 rounded-full overflow-hidden border cursor-pointer"
                >
                  <img
                    src="/images/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`absolute top-16 right-0 w-[200px] h-[180px] bg-white shadow-lg rounded-md p-4 transform transition-all duration-500 ${
                    showProfile ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                >
                  <div className="w-42 flex flex-col items-center gap-2">
                    <img
                      src="/images/profile.jpg"
                      alt="Profile"
                      className="w-10 h-10 rounded-full border"
                    />
                    <div className="flex flex-col justify-start items-start gap-2 ">
                    <Link to={'/profile'} className="flex justify-start gap-2"><i className="ri-file-user-line"></i>My Profile</Link>
                    <Link to={'/cart'} className="flex justify-start gap-2"><i className="ri-shopping-cart-fill"></i>My Cart</Link>

                    </div>
                    <hr className="w-full border-gray-300" />
                   <button className="flex justify-start gap-2" onClick={()=>signOut(auth)}>
                   <i className="ri-logout-circle-line text-lg cursor-pointer"></i><h3 className="">Logout</h3>
                  
                   </button>
                  </div>
                </div>
              </div>
            )}
          </ul>
        </div>
      </nav>

      {children}

      <footer style={{ background: "crimson" }} className="py-16">
        <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Website Links */}
          <div>
            <h1 className="text-white font-semibold text-2xl mb-3">
              Website Links
            </h1>
            <ul className="space-y-2 text-slate-50">
              {menus.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h1 className="text-white font-semibold text-2xl mb-3">
              Follow Us
            </h1>
            <ul className="space-y-2 text-slate-50">
              <li><Link to="/">Facebook</Link></li>
              <li><Link to="/">YouTube</Link></li>
              <li><Link to="/">Twitter</Link></li>
              <li><Link to="/">LinkedIn</Link></li>
              <li><Link to="/">Instagram</Link></li>
            </ul>
          </div>

          {/* Brand Details */}
          <div className="lg:pr-8">
            <h1 className="text-white font-semibold text-2xl mb-3">
              Brand Details
            </h1>
            <p className="text-slate-50 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
              corrupti tempora officia recusandae!
            </p>
            <img src="/images/logo2.png" className="w-[100px]" alt="Brand Logo" />
          </div>

          {/* Contact Form */}
          <div>
            <h1 className="text-white font-semibold text-2xl mb-3">
              Contact Us
            </h1>
            <form className="space-y-4">
              <input
                required
                name="fullname"
                className="bg-white w-full rounded p-3"
                placeholder="Your Name"
              />
              <input
                required
                type="email"
                name="email"
                className="bg-white w-full rounded p-3"
                placeholder="Enter Email"
              />
              <textarea
                required
                name="message"
                className="bg-white w-full rounded p-3"
                placeholder="Message"
                rows={3}
              />
              <button className="bg-black text-white py-3 px-6 rounded w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </footer>

      <aside
        className={`fixed top-0 left-0 h-full z-50 bg-slate-900 shadow-lg overflow-hidden transition-all ${
          open ? "w-[250px]" : "w-0"
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {menus.map((item, index) => (
            <button
              key={index}
              onClick={() => mobileLink(item.href)}
              className="text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Layout;
