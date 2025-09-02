import React from 'react'

const About = () => {
  return (
      <div className="banner_top">
      <div className="after_head">
        <h1>
          About <span>Us</span>
        </h1>
        <h4>Stay Fresh. Stay Healthy.</h4>
        <img
          src="../src/assets/images/water.png"
          alt=""
          className="right_absolute"
        />
      </div>
  <div className='featured about'>
        <div className='container'>
         
          
          <div className="row mb-5">
            
             <div className="col-lg-6 mt-5">
            <img src="../src/assets/images/all_bottle.png" alt="" className='img-fluid'/>
           </div>
          <div className="col-lg-6 mt-4">
            <h1  className='text-start'>
                Who We  <span>Are</span> 
              </h1>
              <h4  className='text-start'>
               "Your Trusted Destination for Quality Products"
              </h4> 
            <p className='grey text-left mb-4'>
           We started this journey with a vision to create a platform where customers
            can find products they truly love. From day one, our focus has been on <strong>customer
             satisfaction, reliability, and innovation.</strong> 
            Today, we proudly serve shoppers who value not just what they buy, but where they buy it from. <br></br>
 <ul>
            <li>✔️ A wide range of handpicked products</li>
            <li>✔️ Affordable prices without compromising quality</li>
            <li>✔️ Secure and hassle-free checkout</li>
            <li>✔️ Fast shipping and reliable delivery</li>
            <li>✔️ Dedicated customer support</li>
           </ul>
            </p>
              <a className='buttonsite' href="/shop">Shop Now <i className='fa fa-arrow-right'></i> </a>

          </div>
          </div>
          <div className="row  mt-5">
            <div className="col-lg-12">
             
              <h1 className='text-start  mt-5'>
              Benefit of<span>PureSip Store</span> 
              </h1>
              <h4 className='text-start'>
                Because every sip should be pure, fresh, and full of life.
              </h4>
              
            </div>
          </div>
          
               <div className="row">
            
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
           <div className="col-lg-6 mt-5">
            <img src="../src/assets/images/all_bottle.png" alt="" className='img-fluid'/>
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

export default About