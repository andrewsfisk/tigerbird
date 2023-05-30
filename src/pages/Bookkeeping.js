import React from "react";
import "./Styles.css";
import xero from "./images/xeroLogo2.png";
import accountingLogo from "./images/desk.jpg";

const Bookkeeping = () => {
  return (
    <div className="container">
      <div className="h1">
        <h1>Our services include</h1>
      </div>
      <hr></hr>
      <div className="logoFlex2">
        <div>
          <p>• Bank account reconciliations</p>
          <p>• Payroll, superannuation, STP, Payroll Tax & Workcover</p>
          <p>• Processing creditor invoices & supplier payments</p>
          <p>• Customer invoicing and debtor control</p>
          <p>• IAS/BAS preparation and lodgement</p>
          <p>• Cash flow and financial analysis</p>
          <p>• EOFY Profit & Loss and Balance Sheet analysis</p>
          <p>• Management reporting</p>
          <p>• Stocktake management</p>
          <p className="italic grey bold">
            <br></br>All bookkeeping services are ATO compliant
          </p>
          <br></br>
        </div>
        <div>
          <img
            className="img2"
            alt="Accounting Logo"
            src={accountingLogo}
            width="450px"
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
            your invoices & receipts.
          </p>
          <p className="bold grey italic">
            If you're not on Xero and want to be, we can help you make the
            change
          </p>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};
export default Bookkeeping;
