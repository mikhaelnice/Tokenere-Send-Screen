import React, { useState } from "react";
import "./desktop3.css";
import PaymentInput from "../components/PaymentInput";
import { Link } from "react-router-dom";

const UserPaymentOtpVerify = () => {
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
          <h3>OTP verification </h3>
          <h3>
            Enter the OTP code send <br /> to your mail
          </h3>
        </div>

        <div className="send-method-content">
          <PaymentInput payment={payment} handelChange={handelChange} />

          <span className="reset-counter">00 : 16</span>

          <button className="reset-code-button">Resend Code</button>

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

export default UserPaymentOtpVerify;
