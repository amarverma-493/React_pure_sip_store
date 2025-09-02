import React, { useContext } from "react";
import products from "../assets/products.json";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "./Cart";

const ProductDetails = () => {
  const { id } = useParams(); // product id from URL
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id.toString() === id);

  // Filter related products (exclude current one, pick 3)
  const relatedProducts = products
    .filter((p) => p.id.toString() !== id)
    .slice(0, 3);

  if (!product) {
    return <h2>Product not found</h2>;
  }

const handleAddToCart = () => {
  addToCart(product);
  navigate("/cart");  
};

  return (
    <div className="banner_top">
      <div className="after_head">
        <h1>
          Product <span>Details</span>
        </h1>
        <h4>Stay Fresh. Stay Healthy.</h4>
        <img
          src="../src/assets/images/water.png"
          alt=""
          className="right_absolute"
        />
      </div>

      <div className="container mt-5">
        {/* Product Details Section */}
        <div className="row mb-5 details_page">
          <div className="col-md-6">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <h4>{product.category}</h4>
            <h5>
              ${product.price} <small>$49.99</small>
            </h5>

            <h4>{product.ingredients.join(" | ")}</h4>
            <p>{product.description}</p>
            <p>{product.howToUse}</p>

            <div>
              <strong>Benefits:</strong>
              <ul>
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <button className="product_button" onClick={handleAddToCart}>
              <i className="fa fa-shopping-basket"></i> Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="related mt-5 pt-5">
          <h1>
            Related <span>Products</span>
          </h1>
          <h4>Stay Fresh. Stay Healthy.</h4>
          <p>
            Whether you're looking for a morning detox, a post-workout
            refreshment, or just a delicious way to boost your day, our juices
            are crafted to deliver both taste and nutrition in every sip.
          </p>

          <div className="row mb-5 mt-3">
            {relatedProducts.map((rp) => (
              <div key={rp.id} className="col-lg-4">
                <div className="product">
                  <a href="/" className="wishlist">
                    <i className="fa fa-heart-o"></i>
                  </a>
                  <img src={rp.image} className="img-fluid" alt={rp.name} />
                  <h2>{rp.name}</h2>
                  <h4>{rp.category}</h4>
                  <h5>${rp.price}</h5>
                  <p className="apple">{rp.description}</p>
                  <div className="d-block text-center">
                    <button
                      className="product_button"
                      onClick={() => addToCart(rp)}
                    >
                      <i className="fa fa-shopping-basket"></i> Add To Cart
                    </button>
                    <a href={`/product/${rp.id}`} className="viewbuttom">
                      <i className="fa fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;