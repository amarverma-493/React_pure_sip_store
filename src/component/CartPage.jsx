import React, { useContext } from "react";
import { CartContext } from "./Cart";


const CartPage = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
      <div className="banner_top">
        <div className="after_head">
        <h1>
          Cart <span>Details</span>
        </h1>
        <h4>Stay Fresh. Stay Healthy.</h4>
        <img
          src="../src/assets/images/water.png"
          alt=""
          className="right_absolute"
        />
      </div>
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item d-flex justify-content-between align-items-center mb-3 p-3 border rounded"
            >
              <div className="d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "80px", marginRight: "15px" }}
                />
                <div>
                  <h5>{item.name}</h5>
                  <p>${item.price}</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              <div>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </div>
              <button
                className="viewbuttom"
                onClick={() => removeFromCart(item.id)}
              >
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          ))}

          <div className="cart-total mt-4 text-right mb-5">
            <h4 className=" text-end">Total: ${total.toFixed(2)}</h4>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;