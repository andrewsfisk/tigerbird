import React from "react";
import image1 from "./images/image1_1.jpg";
import "./Styles.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="h1">
          <h1>Bookkeepers who bring more to the table</h1>
        </div>
        <hr></hr>
        <p>
          Tigerbird is a bookkeeping service that manages the day to day
          accounts and financial reporting for some of Melbourne's best
          restaurants and bars.
        </p>
        <p>
          Our specialised bookkeepers offer a wide range of financial and
          administrative services, tailored to suit individual business needs,
          so business owners can get back to running their venues.
        </p>
        <p>
          We specialise in supporting hospitality businesses, however our
          services are also used by a wide range of industries.
        </p>
        <p className="bold grey italic">
          Let us take care of your bookkeeping, so you are free to serve your
          customers
        </p>
        <hr className="hrBottom"></hr>
      </div>
      <img alt="image1" src={image1} width="100%" />
    </div>
  );
};
export default Home;
