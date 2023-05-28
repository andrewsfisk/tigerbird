import React from "react";
import "./Styles.css";
import phone from "./images/phone.jpg";

const Contact = () => {
  return (
    <div className="container">
      <div className="h1">
        <h1>Contact us</h1>
      </div>
      <hr></hr>
      <div className="logoFlex">
        <div>
          <p className="title">Debbie King</p>
          <p>Bookkeeping and Account Manager</p>
          <p>
            <a href="tel:03 9383 6659">p: 03 9383 6659</a>
          </p>
          <p>
            <a href="mailto:accounts@tigerbirdbookkeeping.com">
              e: accounts@tigerbirdbookkeeping.com
            </a>
          </p>
          <p>Mycelium Studios, Factory 1/10-12 Moreland Road, Brunswick 3057</p>
        </div>
        <img className="img4" alt="phone" src={phone} width="350px" />
      </div>
      <p className="italic">
        * Debbie is a Certified Bookkeeper, BAS agent, Xero Advisor and is
        Payroll Certified with over 45 years accounting experience.
      </p>
      <div className="padtop">
        <hr></hr>
      </div>
    </div>
  );
};
export default Contact;
