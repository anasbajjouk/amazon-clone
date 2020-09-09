import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../context/StateProvider";
import "./SubTotal.css";


const SubTotal = ({ }) => {
  const [{ basket }] = useStateValue();

  const getBasketTotal = (basket) =>{
    
  }


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`  ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Procees to Checkout</button>
    </div>
  );
};

export default SubTotal;
