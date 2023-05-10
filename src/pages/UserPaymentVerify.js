import React, { useState } from "react";
import "./desktop3.css";
import PaymentInput from "../components/PaymentInput";
import { Link } from "react-router-dom";

const UserPaymentVerify = () => {
  const [payment, setPayment] = useState("");

  const handelChange = (e) => {
    setPayment(e.target.value);
    console.log(payment);
  };

  return (
    <div className="currency-section-container">
      <div className="currency-section-header">
        <h1>Send</h1>
      </div>

      <div className="currency-wrapper">
        <div style={{ width: "50%", margin: "0 auto" }}>
          <h3>Send </h3>
          <h3>Enter your PIN</h3>
        </div>

        <div className="send-method-content">
          <PaymentInput payment={payment} handelChange={handelChange} />

          <Link to={"/select-user-method/send-user-payment-otp-verification"}>
            <button style={{ marginTop: "50px" }} className="btn-default">
              Verify
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPaymentVerify;
