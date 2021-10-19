import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-cont">
      <div className="settings-icon-cont">
        <img
          src="https://img.icons8.com/ios-glyphs/60/000000/menu--v1.png"
          alt="setting-icon"
        />
      </div>
      <div className="logo-cont">
        <img
          className="logo icon"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo"
        />
        <h1 className="logo name">Keep</h1>
      </div>
      <div className="input-cont">
        <img
          src="https://img.icons8.com/ios/60/000000/search--v5.png"
          alt="search-icon"
        />
        <input type="text" />
      </div>
    </div>
  );
}

export default Header;
