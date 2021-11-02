import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-cont">
      <div className="logo-cont">
        <img
          className="logo licon"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo"
        />
        <h1 className="logo lname">Keep</h1>
      </div>
      <div className="input-cont">
        <img
          src="https://img.icons8.com/ios/60/000000/search--v5.png"
          alt="search-icon"
        />
        <input type="text" />
      </div>
    </header>
  );
}

export default Header;
