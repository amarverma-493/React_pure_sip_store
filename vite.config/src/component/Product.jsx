import React, { useContext } from "react";
import products from "../assets/products.json";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./Cart";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart"); // redirect to cart
  };

  const handleViewProduct = (id) => {
    navigate(`/product/${id}`); // go to product details
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-sm-4 mb-5">
          <div className="product">
            <a href="/" className="wishlist">
              <i className="fa fa-heart-o"></i>
            </a>
            <img src={product.image} alt={product.name} className="img-fluid" />
            <h2>{product.name}</h2>
            <h4>{product.category}</h4>
            <h5>${product.price}</h5>
            <p className="apple">{product.description}</p>
            <div className="d-block text-center">
              <button
                onClick={() => handleAddToCart(product)}
                className="product_button"
              >
                <i className="fa fa-shopping-basket"></i> Add To Cart
              </button>
              <button
                onClick={() => handleViewProduct(product.id)}
                className="viewbuttom"
              >
                <i className="fa fa-eye"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;