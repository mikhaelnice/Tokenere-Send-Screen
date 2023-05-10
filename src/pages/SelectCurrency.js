import { Link } from "react-router-dom";
import "./desktop3.css";

const SelectCurrency = () => {
  return (
    <div className="currency-section-container">
      <div className="currency-section-header">
        <h1>Send</h1>
      </div>

      <div className="currency-wrapper">
        <div>
          <h3>Select currency</h3>
        </div>

        <div className="currency-card-wrapper">
          <Link to={"/select-send-method"}>
            <div className="currency-card">
              <img src="/bitcoin-logo 1.svg" alt="" />
              <div className="currency-card-content">
                <h3>Bitcoin </h3>
                <h3>0 BTC </h3>
              </div>
            </div>
          </Link>
          <Link to={"/select-send-method"}>
            <div className="currency-card">
              <img src="/chiliz-chz-logo-605C6C40F6-seeklogo 1.svg" alt="" />
              <div className="currency-card-content">
                <h3>Bitcoin </h3>
                <h3>0 BTC </h3>
              </div>
            </div>
          </Link>
          <Link to={"/select-send-method"}>
            <div className="currency-card">
              <img src="/coinbase-coin-logo-C86F46D7B8-seeklogo 1.svg" alt="" />
              <div className="currency-card-content">
                <h3>Bitcoin </h3>
                <h3>0 BTC </h3>
              </div>
            </div>
          </Link>
          <Link to={"/select-send-method"}>
            <div className="currency-card">
              <img
                src="/png-clipart-ethereum-cryptocurrency-bitcoin-cash-smart-contract-bitcoin-blue-angle-thumbnail 1.svg"
                alt=""
              />
              <div className="currency-card-content">
                <h3>Bitcoin </h3>
                <h3>0 BTC </h3>
              </div>
            </div>
          </Link>
          <Link to={"/select-send-method"}>
            <div className="currency-card">
              <img src="/dai-dai-logo-1AFFA0EDE5-seeklogo 1.svg" alt="" />
              <div className="currency-card-content">
                <h3>Bitcoin </h3>
                <h3>0 BTC </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectCurrency;
