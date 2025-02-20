import React from "react";

function Layout({ children }) {
  return (
    <>
      <div>Layout</div>
      {children}
      <h1>Home</h1>
    </>
  );
}

export default Layout;
