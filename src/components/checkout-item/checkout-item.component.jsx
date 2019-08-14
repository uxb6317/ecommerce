import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  removeItem,
  addItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};

export default connect(
  null,
  { clearItemFromCart, removeItem, addItem }
)(CheckoutItem);
