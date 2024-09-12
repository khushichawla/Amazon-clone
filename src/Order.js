import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormatter from "./CurrencyFormatter";

function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value).toFixed(2));
  }

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      {/* <h3 className="order__total">Order Total: {formatCurrency(order.data.amount)}</h3> */}
      <h3 className="order__total">
      Order Total: <CurrencyFormatter value={order.data.amount} />
    </h3>
    {(() => {
        console.log("Basket Total:", order.data.amount); // Log the basket total
      })()} 
    </div>
  );
}

export default Order;
