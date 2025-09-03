import React from 'react'
import ProductList from "../component/Product";

const Home = () => {
  return (
    <div>
      <div  className='banner'>
        <div className='container'>
<div className="row">
  <div className="col-lg-5">
    <div className="banner_header">
      <h1>Sip the <span>Freshness, </span> 
Feel the <span>Energy.</span></h1>
<p>Cold-pressed, nutrient-packed juices made from the finest 
fruits and greens — delivered fresh to your doorstep.</p>

<a className='buttonsite' href="/shop">Taste the Difference <i className='fa fa-arrow-right'></i> </a>
    </div>
  </div>
   <div className="col-lg-7">
   <div className="baner_right">
     <p className='top_offer rise-shake'>Fresh Start Offer - 20% OFF All Green Juices!</p>
    <img src="../src/assets/images/line.png" className='' alt="" />
   </div>
    <img className='bannr' src="./assets/images/banner_img.png" alt="" />

   </div>
</div>
        </div>
      </div>

      <div className='featured'>
        <div className='container'>
          <div className="row">
            <div className="col-lg-12">
              <img src="../src/assets/images/water.png" alt="" className="right_absolute" />
              <h1>
                Featured <span>Products</span> 
              </h1>
              <h4>
                Stay Fresh. Stay Healthy.
              </h4>
              <p>
                Whether you're looking for a morning detox, 
                a post-workout refreshment, or just a delicious 
                way to boost your day, our juices are crafted to 
                deliver both taste and nutrition in every sip.
              </p>
            </div>
          </div>
         

  <ProductList />


            {/* <div className="col-lg-4">
              <div className='product'>
                <a href='/' className='wishlist'>
                  <i className="fa fa-heart-o"></i>
                </a>
                <img src="../src/assets/images/product_1.png" className='img-fluid' alt="" />
                <h2>
                  Green Glow 
                </h2>
                <h4>Apple & Kale Cleanse</h4>
                <h5>$15.99</h5>
                <p className='apple'>
                  A crisp blend of green apple, kale,
                   cucumber, lemon, and mint. Packed with
                    antioxidants and vitamins to give your body the fresh start it deserves.
                </p>
               <div className='d-block text-center'>
                 <a href="/" className='product_button'><i className='	fa fa-shopping-basket'></i> Add To Cart</a>
               <a href="" className='viewbuttom'> <i className='fa fa-eye'></i></a>
               </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className='product'>
                <a href='/' className='wishlist'>
                  <i className="fa fa-heart-o"></i>
                </a>
                <img src="../src/assets/images/product_2.png" className='img-fluid' alt="" />
                <h2>
                  Berry Red
                </h2>
                <h4>Strawberry Watermelon Splash</h4>
                <h5>$19.99</h5>
                <p className='apple'>
                 A luscious mix of blueberries, coconut water, pineapple, and a touch of lime.
                  Bursting with flavor and antioxidants to keep you glowing inside and out.
                </p>
               <div className='d-block text-center'>
                 <a href="/" className='product_button'><i className='	fa fa-shopping-basket'></i> Add To Cart</a>
               <a href="" className='viewbuttom'> <i className='fa fa-eye'></i></a>
               </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className='product'>
                <a href='/' className='wishlist'>
                  <i className="fa fa-heart-o"></i>
                </a>
                <img src="../src/assets/images/product_3.png" className='img-fluid' alt="" />
                <h2>
                Sunshine Gold
                </h2>
                <h4>Tropical Pineapple Boost</h4>
                <h5>$21.99</h5>
                <p className='apple'>
                 A tropical fusion of pineapple, mango, passionfruit, and orange. 
                 Rich in vitamin C to keep your immunity strong and your taste buds happy.
                </p>
               <div className='d-block text-center'>
                 <a href="/" className='product_button'><i className='	fa fa-shopping-basket'></i> Add To Cart</a>
               <a href="" className='viewbuttom'> <i className='fa fa-eye'></i></a>
               </div>
              </div>
            </div> */}

          <div className="row">
            <div className="col-lg-12 text-center mt-1" >
              <a className='buttonsite' href="/shop">View All Products <i className='fa fa-arrow-right'></i> </a>

            </div>
          </div>
        </div>
      </div>


        <div className='featured'>
        <div className='container'>
          <div className="row">
            <div className="col-lg-12">
              <img src="../src/assets/images/water.png" alt="" className="right_absolute" />
              <h1>
                Why Choose <span>PureSip Store?</span> 
              </h1>
              <h4>
                Because every sip should be pure, fresh, and full of life.
              </h4>
              
            </div>
          </div>
          
          <div className="row">
             <div className="col-lg-6 mt-5">
            <img src="../src/assets/images/all_bottle.png" alt="" className='img-fluid'/>
           </div>
          <div className="col-lg-6 mt-4">
            <p className='grey text-left mb-4'>
              At PureSip Store, we believe that good health starts with what you put into your body. 
              That's why we handcraft every bottle of juice using fresh, locally sourced fruits, 
              vegetables, and herbs — nothing artificial, ever. <br></br>

Our journey began with a simple mission: to make healthy living effortless and delicious.
 We wanted to create juices that not only taste amazing but also deliver real nutritional 
 benefits you can feel.
<br></br>
From farm to bottle, we follow a cold-press process that preserves vitamins, minerals,
 and enzymes — giving you the purest sip possible. Whether it's a green detox, a tropical
  boost, or a berry burst, each blend is designed to fuel your day and make you feel your best.
            </p>
              <a className='buttonsite' href="/shop">Shop Now <i className='fa fa-arrow-right'></i> </a>

          </div>
          </div>
              


        </div>
      </div>

<div className='about-full'>
                <div className='container-fluid'>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="about_content">
                          <img src="../src/assets/images/icon_1.png" alt="" />
                          <h1>Freshly Cold-Pressed Daily</h1>
                          <p>
                           We make our juices in small batches every day to lock in 
                           nutrients and deliver maximum freshness.
                          </p>
                      </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="about_content about_content_2">
                          <img src="../src/assets/images/icon_2.png" alt="" />
                          <h1>100% Natural & Organic Ingredients</h1>
                          <p>
                           

No preservatives, no added sugar, no artificial flavors — just real fruits, veggies, and herbs.
                          </p>
                      </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="about_content about_content_2">
                          <img src="../src/assets/images/icon_3.png" alt="" />
                          <h1>Packed with Nutrients</h1>
                          <p>
                           Our blends are designed to boost immunity, improve digestion,
                            and keep your energy high naturally.
                          </p>
                      </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="about_content ">
                          <img src="../src/assets/images/icon_4.png" alt="" />
                          <h1>Eco-Friendly Packaging</h1>
                          <p>
                          We care for your health and the planet — every bottle is recyclable and BPA-free.
                          </p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



    </div>
  )
}

export default Home