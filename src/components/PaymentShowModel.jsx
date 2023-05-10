import React from "react";

const PaymentShowModel = ({ src, title, text }) => {
  return (
    <div className="paymentShowModel">
      <h3>{title}</h3>
      <img src={src} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default PaymentShowModel;
