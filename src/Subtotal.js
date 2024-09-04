import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function Subtotal() {
  const [{ basket }] = useStateValue();
  const subtotal = getBasketTotal(basket);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length} items): <strong>{formatCurrency(subtotal)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;