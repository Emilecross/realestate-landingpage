import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.jpeg" alt="" width={120} />
          <span className="secondaryText">
            Our goal is to ensure that we get<br />
            the best value for buyers and sellers
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Contact Us</span>
          <span className="secondaryText">0449 101 907</span>
          <span className="secondaryText">admin@cnmproperty.com.au</span>
          <span className="secondaryText">7/8 Mcfarlane street Merrylands NSW 2145</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
