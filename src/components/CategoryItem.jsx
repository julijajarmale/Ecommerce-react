import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ item }) {
  return (
    <div className="item-container">
      <div key={item.id} className="img-container">
        <img src={item.img} alt="category" border="0" />
      </div>
      <div className="info-container">
        <Link style={{ textDecoration: "none" }} to="/productlist">
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
