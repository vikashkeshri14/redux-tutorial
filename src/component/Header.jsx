import React from "react";
const Header = (props) => {
  return (
    <div className="wrapper">
      <h1>Home Component</h1>

      <div className="cart">
        {props.data.length != 0 ? (
          <div
            style={{
              position: "absolute",
              right: "-10px",
              padding: "5px",
              background: "#ccc",
              borderRadius: "10px",
              fontSize: "12px",
              width: "15px",
              height: "15px",
              textAlign: "center",
              color: "#000",
            }}
          >
            {props.data.length}
          </div>
        ) : (
          ""
        )}

        <img
          src="trolley.png"
          style={{ width: "40px", height: "40px", display: "inline" }}
        />
      </div>
    </div>
  );
};

export default Header;
