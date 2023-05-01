import React from "react";
import "./Styles.css";
import xero from "./images/xeroLogo2.png";

const Bookkeeping = () => {
  return (
    <div className="container">
      <h1 className="h1">Our services include, but are not limited to</h1>
      <hr></hr>
      <div>
        <p>• Reconciliation of all bank accounts and credit cards</p>
        <p>
          • Payroll, including superannuation, STP, Payroll Tax and Workcover
        </p>
        <p>
          • Processing of all creditor invoices along with supplier payments
        </p>
        <p>• Customer invoicing and debtor control</p>
        <p>• IAS/BAS preparation and lodgement</p>
        <p>• Cash flow and financial analysis</p>
        <p>• EOFY Profit & Loss and Balance Sheet analysis</p>
        <p>• Management reporting</p>
        <p>• Stocktake management</p>
        <p>All bookkeeping services are ATO compliant</p>
      </div>
      <hr></hr>
      <div className="xero">
        <img className="img" alt="xero" src={xero} width="200"></img>
        <div>
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
