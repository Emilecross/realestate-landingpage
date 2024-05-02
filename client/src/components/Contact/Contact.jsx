import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">How can you find us?</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We're not like the big players who might be unreachable. 
            <br />
            Let our team give you the bespoke and individualised support that you need.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">0449 101 907</span>
                  </div>
                </div>
                <a className="flexCenter button" href="tel:+61449101907" alt="Call CNM Property">Call now</a>
              </div>

              <div className="flexColCenter modeEmail">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">admin@cnmproperty.com.au</span>
                  </div>
                </div>
                <a className="flexCenter button" href="mailto:admin@cnmproperty.com.au">Email us</a>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
