import React from "react";
import "./Checkout.css";
import SubTotal from "../components/subTotal/SubTotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
          className="checkout__ad"
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {/* BasketItem */}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
        <h2>Sub total will go here</h2>
      </div>
    </div>
  );
};

export default Checkout;
