import React, { useState, useContext } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

const Cart = () => {
  const [buttonText, setButtonText] = useState("Place Order");

  const { cartItems, emptyCart } = useContext(Context);
  const total = 499 * cartItems.length;
  const totalCostDisplay = total.toLocaleString("en-US", {
    style: "currency",
    currency: "KSH",
  });

  const cartElements = cartItems.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });

  const placeOrder = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartElements}
      <p className="total-cost">Total: {totalCostDisplay} </p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  );
};

export default Cart;
