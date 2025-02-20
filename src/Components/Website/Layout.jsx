import React from "react";
import { Link } from "react-router-dom";
function Layout({ children }) {
  const menus = [
    {
        label: "Home",
        href: '/'
    },
    {
        label: "Products",
        href: '/webproducts'
    },
    {
        label: "Category",
        href: '/category'
    },
    {
        label: "Contact us",
        href: '/contact-us'
    }
]
  return (
    <>
      <div>
        <nav className="sticky p-4 top-0 left-0 shadow-lg bg-white">
        <div className="w-10/12 mx-auto flex items-center justify-between">
                    <img 
                        src="/images/logo2.png"
                        className="w-[100px]"
                    />

                    <ul className="flex gap-6 items-center">
                        {
                            menus.map((item, index)=>(
                                <li key={index}>
                                    <Link 
                                        to={item.href}
                                        className="block py-3 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                                    >{item.label}</Link>
                                </li>
                            ))
                        }
                        <Link 
                            className="block py-3 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                            to="/login"
                        >Login</Link>

                        <Link 
                            className="bg-blue-600 py-3 px-10 text-md font-semibold text-white block text-center hover:bg-rose-600 hover:text-white"
                            to="/signup"
                        >Signup</Link>
                    </ul>
                </div>
        </nav>
      </div>
      {children}
      <footer style={{background:'crimson'}} className=" py-16">
                <div className="w-10/12 mx-auto grid grid-cols-4">
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Website Links</h1>
                        <ul className="space-y-2 text-slate-50">
                            {
                                menus.map((item, index)=>(
                                    <li key={index}>
                                        <Link to={item.href}>{item.label}</Link>
                                    </li>
                                ))
                            }
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Follow us</h1>
                        <ul className="space-y-2 text-slate-50">
                            <li><Link to="/">Facebook</Link></li>
                            <li><Link to="/">Youtube</Link></li>
                            <li><Link to="/">Twitter</Link></li>
                            <li><Link to="/">Linkedin</Link></li>
                            <li><Link to="/">Instagram</Link></li>
                        </ul>
                    </div>
                    <div className="pr-8">
                        <h1 className="text-white font-semibold text-2xl mb-3">Brand Details</h1>
                        <p className="text-slate-50 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe cupidium est velit excepturi sit corrupti tempora officia recusandae!</p>
                        <img 
                            src="/images/logo2.png"
                            className="w-[100px]"
                        />
                    </div>
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Contact us</h1>
                        <form className="space-y-4">
                            <input 
                                required
                                name="fullname"
                                className="bg-white w-full rounded p-3"
                                placeholder="Your name"
                            />

                            <input 
                                required
                                type="email"
                                name="email"
                                className="bg-white w-full rounded p-3"
                                placeholder="Enter email id"
                            />

                            <textarea 
                                required
                                name="message"
                                className="bg-white w-full rounded p-3"
                                placeholder="Message"
                                rows={3}
                            />

                            <button className="bg-black text-white py-3 px-6 rounded">Submit</button>
                        </form>
                    </div>
                </div>
            </footer>
    </>
  );
}

export default Layout;
