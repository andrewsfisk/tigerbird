import React from "react";
import "./Styles.css";
import image from "./images/plant.jpg";

const Mentoring = () => {
  return (
    <div className="container">
      <div className="h1">
        <h1>Do you find yourself asking the following questions?</h1>
      </div>
      <hr></hr>
      <div className="row">
        <div className="logoFlex">
          <div>
            <p>• Am I making a profit?</p>
            <p>• What are my costs?</p>
            <p>• Is this product priced correctly?</p>
            <p>• Am I able to expand?</p>
            <p>
              Many hospitality business owners are run off their feet and don't
              truly understand what's going on with their books.
            </p>
            <h2>That's where Tigerbird can help</h2>
            <p className="pbot">
              Our mentor can help you understand your books, so you can make
              informed decisions about your future, and identify opportunities
              for growth.
            </p>
            <hr></hr>
          </div>

          <img className="img3" alt="plant" src={image} />
        </div>
      </div>
    </div>
  );
};
export default Mentoring;
