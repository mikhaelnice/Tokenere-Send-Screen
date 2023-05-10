import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="whats-new">
        <div>
          <h2>What’s New?</h2>
          <p>
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
        </div>
        <div className="whats-new-content">
          <div>
            <div className="search-nav mail">
              <div className="vector-parent">
                <img className="vector-icon" alt="" src="/verifiction.svg" />
                <input type="text" placeholder="Enter your email address" />
                <button>Subscribe</button>
              </div>
            </div>
            <p>We’ll never share your email address with a third-party. </p>
          </div>
          <div>
            <img src="/Group 2819.svg" alt="" />
            <img src="/Group 2821.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="links-section">
        <div className="links-section-block">
          <h3>Company</h3>
          <ul style={{ marginLeft: "21px" }}>
            <li>
              <a href=""> About Us</a>
            </li>
            <li>
              <a href=""> Team</a>
            </li>
            <li>
              <a href=""> Privacy Policy</a>
            </li>
            <li>
              <a href=""> Terms & Condition</a>
            </li>
            <li>
              <a href=""> Partnership</a>
            </li>
          </ul>
        </div>

        <div className="links-section-block">
          <h3>Need Help</h3>
          <ul>
            <li>
              <a href=""> Help Center</a>
            </li>
            <li>
              <a href=""> Contact Us</a>
            </li>
            <li>
              <a href=""> How to trade</a>
            </li>
            <li>
              <a href=""> Submit a dispute</a>
            </li>
            <li>
              <a href=""> Report a product</a>
            </li>
            <li>
              <a href=""> Return a product</a>
            </li>
            <li>
              <a href=""> FAQs</a>
            </li>
          </ul>
        </div>

        <div className="links-section-block">
          <h3>Business Services</h3>
          <ul style={{ marginLeft: "-40px" }}>
            <li>
              <a href=""> Trade Assurance</a>
            </li>
            <li>
              <a href=""> Product Testing</a>
            </li>
            <li>
              <a href=""> On-Site Verification</a>
            </li>
            <li>
              <a href=""> Certification</a>
            </li>
            <li>
              <a href=""> Logistics Services</a>
            </li>
          </ul>
        </div>

        <div className="links-section-block">
          <h3>Buy on Business</h3>
          <ul style={{ marginLeft: "-40px" }}>
            <li>
              <a href=""> Register as a buyer</a>
            </li>
            <li>
              <a href=""> All Categories</a>
            </li>
            <li>
              <a href=""> How to buy</a>
            </li>
          </ul>
        </div>

        <div className="links-section-block">
          <h3>Sell on Business</h3>
          <ul style={{ marginLeft: "-40px" }}>
            <li>
              <a href=""> Register as a seller</a>
            </li>
            <li>
              <a href=""> How to sell</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="social-media">
        <div>
          <h3>Join Us</h3>
          <ul style={{ marginLeft: "-40px" }}>
            <li>
              <a href="">
                <img src="/facebook.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/instagram.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/twitter.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/youtube.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/linkedin.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Payment Methods</h3>
          <ul style={{ marginLeft: "-40px" }}>
            <li>
              <a href="">
                <img src="/XMLID 1.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/visa.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Delivery Partners</h3>
          <ul style={{ marginLeft: "-40px" }}>
            <li>
              <a href="">
                <img src="/Mask Group.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
