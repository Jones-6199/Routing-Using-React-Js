import React from "react";
import { Link, Outlet } from "react-router-dom";
import Features from "./FeaturesProducts";
import News from "./NewsProducts";
export default function Products() {
  return (
    <>
      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <label for="products">Search</label>
        <input type="text" placeholder="Search Products.." id="products" />
      </div>

      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Link to="/Products/Features">Features</Link>
        <Link to="/Products/News">News</Link>
      </div>
      <Outlet />
    </>
  );
}
