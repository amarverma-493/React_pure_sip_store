import React from 'react'
import ProductList from "../component/Product";


const Shop = () => {
  return (
     <div className="banner_top">
        <div className="after_head">
        <h1>
          Our <span>Products</span>
        </h1>
        <h4>Stay Fresh. Stay Healthy.</h4>
        <img
          src="../src/assets/images/water.png"
          alt=""
          className="right_absolute"
        />
      </div>
     <div className='featured'>
        <div className='container'>
          
         

  <ProductList />


         
        </div>
      </div>
    </div>
  )
}

export default Shop