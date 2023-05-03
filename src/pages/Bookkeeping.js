import React from "react";
import "./Styles.css";
import xero from "./images/xeroLogo2.png";
import accountingLogo from "./images/accountingLogo.png";

const Bookkeeping = () => {
  return (
    <div className="container">
      <div className="h1">
        <h1>Services</h1>
      </div>
      <hr></hr>
      <div className="logoFlex">
        <div>
          <p>• Reconciliation</p>
          <p>• Payroll</p>
          <p>• Supplier Payments</p>
          <p>• Invoicing</p>
          <p>• IAS/BAS preparation and lodgement</p>
          <p>• Cash flow and financial analysis</p>
          <p>• EOFY Profit & Loss and Balance Sheet analysis</p>
          <p>• Management Reports</p>
          <p>• Stocktake Management</p>
          <p className="italic">
            <br></br>All bookkeeping services are ATO compliant
          </p>
        </div>
        <div>
          <img
            className="img2"
            alt="Accounting Logo"
            src={accountingLogo}
            width="300px"
          />
        </div>
      </div>
      <hr></hr>
      <div className="xero">
        <img className="img" alt="xero" src={xero} width="200"></img>
        <div className="pad">
          <h1>We love Xero!</h1>
          <p>
            It's easy to use, lets us access your books easily and integrates
            with many other applications, including Hubdoc, Cooking The Books &
            Drinking The Profits, to streamline the data process and capture
            your receipts.
          </p>
          <p>
            If you're not on Xero and want to be, we can help you make the
            change.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Bookkeeping;
