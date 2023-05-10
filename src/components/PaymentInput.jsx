import React from "react";

const PaymentInput = ({ payment, handelChange }) => {
  return (
    <div className="paymentInput">
      <input type="text" value={payment} onChange={handelChange} />
    </div>
  );
};

export default PaymentInput;
