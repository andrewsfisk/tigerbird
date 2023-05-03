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
          <h5>Debbie King</h5>
          <p>Bookkeeping and Account Manager</p>
          <p>m: 0491 076 179</p>
          <p>p: 03 9489 1790</p>
          <p>e: accounts@tigerbirdinternational.com</p>
          <p>
            Office 111 C/- Dallas Group Business Centre 135 Bamfield Road,
            Heidelberg Heights, Vic 3081.
          </p>
          <p className="italic">
            Debbie is a Certified Bookkeeper, Xero Advisor & Payroll Certified
            with over 45 years accounting experience
          </p>
        </div>
        <img className="img4" alt="phone" src={phone} />
      </div>
    </div>
  );
};
export default Contact;
