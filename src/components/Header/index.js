import React from "react";
import "./header.css";

function Header({ children }) {
  return (
    <div>
      <header className="title">
        <h1>k</h1>
        {children}
      </header>
    </div>
  );
}

export default Header;
