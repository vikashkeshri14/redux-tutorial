import React from "react";
const Home = () => {
  return (
    <div className="wrapper">
      <h1>Home Component</h1>
      <div className="cart">
        <img
          src="trolley.png"
          style={{ width: "40px", height: "40px", display: "inline" }}
        />
        <span></span>
      </div>
      <div className="wrapper-item">
        <div className="cart-wrapper-item">
          <div className="img-wrapper item">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <div className="cart-text">Gallery</div>
          <div className="cart-price">$400</div>
          <button>Add to cart</button>
        </div>
        <div className="cart-wrapper-item">
          <div className="img-wrapper item">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <div className="cart-text">Gallery</div>
          <div className="cart-price">$400</div>
          <button>Add to cart</button>
        </div>
        <div className="cart-wrapper-item">
          <div className="img-wrapper item">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <div className="cart-text">Gallery</div>
          <div className="cart-price">$400</div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
