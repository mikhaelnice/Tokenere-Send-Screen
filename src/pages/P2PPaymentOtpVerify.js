import React, { useState } from "react";
import "./desktop3.css";
import PaymentInput from "../components/PaymentInput";
import { Link } from "react-router-dom";
import PaymentShowModel from "../components/PaymentShowModel";

const P2PPaymentOtpVerify = () => {
  const [payment, setPayment] = useState("");
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [sendVerify, setSendVerify] = useState(false);

  const handelChange = (e) => {
    setPayment(e.target.value);
    console.log(payment);
  };

  const handelVerify = () => {
    setSendVerify(true);

    setSrc("/pandding.svg");
    setTitle("Transaction");
    setText("Pending.....");

    setTimeout(() => {
      setSrc("/proccessing.svg");
      setTitle("Transaction");
      setText("Processing.....");
    }, 1000);

    setTimeout(() => {
      setSrc("/complate.svg");
      setTitle("");
      setText("Completed");
    }, 2000);

    setTimeout(() => {
      setSendVerify(false);
    }, 3000);
  };

  return (
    <div className="main-section-payment">
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

            <button
              onClick={handelVerify}
              style={{ marginTop: "50px" }}
              className="btn-default"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
      {sendVerify && (
        <div className="model-container">
          <PaymentShowModel src={src} title={title} text={text} />
        </div>
      )}
    </div>
  );
};

export default P2PPaymentOtpVerify;
