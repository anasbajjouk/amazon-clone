import React from "react";
import "./Checkout.css";
import SubTotal from "../../components/subTotal/SubTotal";
import CheckoutProduct from "../../components/checkoutProduct/CheckoutProduct";
import { useStateValue } from "../../context/StateProvider";

const Checkout = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
          className="checkout__ad"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item) => (
            <>
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            </>
          ))}
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
