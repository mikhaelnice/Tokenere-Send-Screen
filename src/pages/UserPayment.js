import React, { useState } from "react";
import "./desktop3.css";
import PaymentInput from "../components/PaymentInput";
import { Link } from "react-router-dom";

const UserPayment = () => {
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
          <h3>Send to user</h3>
          <h3>New payee</h3>
          <h3>Pay ID</h3>
        </div>

        <div className="send-method-content">
          <PaymentInput payment={payment} handelChange={handelChange} />
          <p className="user-payment-agreement">
            Receiver can find pay ID under Wallets-Funding-Pay
          </p>
          <Link to={"/select-user-method/send-user-payment-verify"}>
            <button className="btn-default">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPayment;
