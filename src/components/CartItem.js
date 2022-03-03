import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

const CartItem = ({ item }) => {
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" />
      <p>KSH 499</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
