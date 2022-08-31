import React from "react";
const Home = (props) => {
  return (
    <div className="wrapper-item">
      <div className="cart-wrapper-item">
        <div className="img-wrapper item">
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div className="cart-text">Gallery</div>
        <div className="cart-price">$400</div>
        <button
          className="add-to-cart"
          onClick={() =>
            props.addToCartHandler({ name: "Gallery", price: "400" })
          }
        >
          Add to cart
        </button>
        <button
          className="remove-to-cart"
          onClick={() =>
            props.removeToCartHandler({ name: "Gallery", price: "400" })
          }
        >
          Remove To Cart
        </button>
      </div>
      <div className="cart-wrapper-item">
        <div className="img-wrapper item">
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div className="cart-text">Gallery1</div>
        <div className="cart-price">$600</div>
        <button
          className="add-to-cart"
          onClick={() =>
            props.addToCartHandler({ name: "Gallery1", price: "600" })
          }
        >
          Add to cart
        </button>
        <button
          className="remove-to-cart"
          onClick={() =>
            props.removeToCartHandler({ name: "Gallery1", price: "600" })
          }
        >
          Remove To Cart
        </button>
      </div>
      <div className="cart-wrapper-item">
        <div className="img-wrapper item">
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div className="cart-text">Gallery2</div>
        <div className="cart-price">$800</div>
        <button
          className="add-to-cart"
          onClick={() =>
            props.addToCartHandler({ name: "Gallery2", price: "800" })
          }
        >
          Add to cart
        </button>
        <button
          className="remove-to-cart"
          onClick={() =>
            props.removeToCartHandler({ name: "Gallery2", price: "800" })
          }
        >
          Remove To Cart
        </button>
      </div>
    </div>
  );
};
export default Home;
