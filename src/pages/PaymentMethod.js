import React, { useEffect, useState } from "react";
import "./desktop3.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  let location = useLocation();
  const navigate = useNavigate();

  function handelClick() {
    if (location.pathname === "/select-P2P-method") {
      navigate("/select-P2P-method/send-P2P-payment");
    } else {
      navigate("/select-user-method/send-user-payment");
    }
  }

  return (
    <div className="currency-section-container">
      <div className="currency-section-header">
        <h1>Send</h1>
      </div>

      <div style={{ marginTop: "50px" }} className="currency-wrapper">
        <div className="payment-method-card-wrapper">
          <div className="payment-method-card">
            <h3>5.00</h3>
            <div>
              <img src="/bitcoin-logo 2.svg" alt="" />
              <span> BTC</span>
              <img src="/arrow.svg" alt="" />
            </div>
          </div>

          <p className="estimated-price">
            Estimated price 1 BTC = 27298.84 USD
          </p>

          <div className="payment-method-card">
            <h3>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "normal",
                  lineHeight: "28px",
                }}
              >
                YOU PAY
              </span>
              <br />
              <span>12,571,934.79</span>
            </h3>
            <div>
              <img src="/bitcoin-logo 2.svg" alt="" />
              <span> NGN</span>
              <img src="/arrow.svg" alt="" />
            </div>
          </div>
          <button onClick={handelClick} className="btn-default">
            Send BTC
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
