import React from "react";
import "./Product.css";
import { useStateValue } from "../../context/StateProvider";

const Product = ({ id, title, price, image, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className=" product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                🌟
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt="product iamge" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
