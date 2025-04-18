import React, { Component } from "react";
import "./Product.css";

// Sử dụng component NumberOne
function NumberOne(props) {
  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <img
        src={props.linkanh}
        height="200px"
        width="200px"
        className="img-responsive"
        alt="Image"
      />
      <p>{props.tieude}</p>
      <p>Giá sản phẩm: 400K</p>
    </div>
  );
}
export default NumberOne;