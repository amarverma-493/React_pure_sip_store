import React from 'react'

const Footer = () => {
  return (
    <><div className='footer'>


      <div className="container">
        <div className="row">
          <div className="col-sm-6  col-md-6 col-lg-3">
            <a href="/home" alt="" className="img-fluid">
              <img src="../src/assets/images/logo_footer.png" className="img-fluid mb-4 w-100" alt="" />
            </a>
           
          </div>
          <div className="col-sm-6  col-md-6 col-lg-2">
            <h4>
              Quick Link
            </h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li> <a href="/shop">Shop</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/contact">Contact</a></li>

            </ul>
          </div>
          <div className="col-sm-6  col-md-6 col-lg-3">
            <h4><i className="fa fa-phone"></i>  More Inquiry</h4>
            <p>+999-858 624 984</p>
            <h4 className="mt-5"> <i className="fa fa-send"></i>  Send Mail</h4>
            <p>info@example.com</p>
            <h4 className="mt-5"> <i className="fa fa-map-marker"></i>  Address</h4>
            <p>20 Cooper Square, New York, NY 10003, USA</p>
          </div>
          <div className="col-sm-6  col-md-6 col-lg-4">
            <p>
              <strong> We Are Here</strong>
              With Travel your world, your dream trip is just a step away. Let us take care of the details while you create lifelong memories.
              <strong>Payment Partner</strong>
              <img src="../src/assets/images/cards.png" className="img-fluid" alt="" />
            </p>
          </div>
        </div>
      </div>
    <div className="footer-bottom py-3 text-center">
        <p className="text-white mb-0">
          Copyright ©2025 All rights reserved | eadpod website llc
        </p>
      </div>
      
      </div></>
 

  )
}

export default Footer