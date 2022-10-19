import React from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import SelectedProduct from "../components/SelectedProduct";

export default function SingleProduct() {
  return (
    <>
      <Navbar />
      <SelectedProduct />
      <Newsletter />
      <Footer />
    </>
  );
}
