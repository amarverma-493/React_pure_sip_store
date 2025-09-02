import { useState } from "react";
import "./App.css";
import { CartProvider } from "./component/Cart"; // ✅ use correct file name

import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Shop from "./component/Shop";
import CartPage from "./component/CartPage";
import ProductDetails from "./component/ProductDetails";
 
function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider> {/* ✅ Wrap everything with CartProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
