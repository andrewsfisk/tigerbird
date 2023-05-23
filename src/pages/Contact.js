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
            <a href="tel:0491 076 179">m: 0491 076 179</a>
          </p>
          <p>
            <a href="tel:03 9383 6659">p: 03 9383 6659</a>
          </p>
          <p>
            <a href="mailto:accounts@tigerbirdbookkeeping.com">
              e: accounts@tigerbirdbookkeeping.com
            </a>
          </p>
          <p>
            Office 111 C/- Dallas Group Business Centre 135 Bamfield Road,
            Heidelberg Heights, Vic 3081.
          </p>
        </div>
        <img className="img4" alt="phone" src={phone} />
      </div>
      <p className="italic">
        Debbie is a Certified Bookkeeper, Xero Advisor & Payroll Certified with
        over 45 years accounting experience.
      </p>
    </div>
  );
};
export default Contact;
