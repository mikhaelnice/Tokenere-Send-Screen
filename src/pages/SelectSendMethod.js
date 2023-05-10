import React, { useState } from "react";

import "./desktop3.css";
import { Link } from "react-router-dom";

const SelectSendMethod = () => {
  const [selectMethod, setSelectMethod] = useState("");

  function handelClick(value) {
    setSelectMethod(value);
  }

  return (
    <div className="currency-section-container">
      <div className="currency-section-header">
        <h1>Send</h1>
      </div>

      <div className="currency-wrapper">
        <div>
          <h3 style={{ textAlign: "center" }}>Select Send Method</h3>
        </div>

        <div className="send-method-content">
          <button
            onClick={() => handelClick("select-user-method")}
            className="btn-outline"
          >
            <h3>User ID</h3>
            <p>Send to user by ID</p>
          </button>
          <button
            onClick={() => handelClick("select-P2P-method")}
            className="btn-outline"
          >
            <h3>P2P Trading </h3>
            <p>
              Bank Transfer, Digital Wallet <br /> Transfer and more
            </p>
          </button>
          <Link to={`/${selectMethod}`}>
            <button className="btn-default">Proceed</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectSendMethod;
