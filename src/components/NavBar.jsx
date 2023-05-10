import React, { useState } from "react";

const NavBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="nav">
      <div className="logo">LOGO</div>

      <div className="search-nav ">
        <div className="vector-parent">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search for products or suppliers"
          />
          <button>SEARCH</button>
        </div>
      </div>

      <div className="frame-parent">
        <a href="#" className="vector-group">
          <img className="vector-icon1" alt="" src="/vector1.svg" />
          <div className="my-account">My Account</div>
        </a>
        <a href="#" className="vector-group">
          <img className="vector-icon2" alt="" src="/vector2.svg" />
          <div className="my-account">Cart</div>
        </a>
        <a href="#" className="vector-group">
          <img className="frame-child" alt="" src="/group-2603.svg" />
          <div className="my-account">Deposit</div>
        </a>
        <a href="#" className="vector-group">
          <img className="frame-item" alt="" src="/group-2604.svg" />
          <div className="my-account">Notification</div>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
