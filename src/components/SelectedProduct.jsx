import React from "react";

function SelectedProduct() {
  return (
    <div className="p-container">
      <div className="img-container">
        <img src={JSON.parse(localStorage.img)} alt="#" />
      </div>
      <div className="info-container">
        <h1 className="title">hello</h1>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          impedit ad sit natus! Possimus in molestiae rerum quis impedit fugiat
          sint aliquam et! Eligendi harum laborum aperiam explicabo aut quasi.
        </p>
        <b className="price">499.99</b>
        <div className="filter">
          <p>Select color</p>
          <select>
            <option>Black</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Red</option>
          </select>
          <p>Select size</p>
          <select>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="add">
          <p>-</p>
          <p>1</p>
          <p>+</p>
          <div />
        </div>
        <button className="button-1">Add to cart</button>
      </div>
    </div>
  );
}

export default SelectedProduct;
