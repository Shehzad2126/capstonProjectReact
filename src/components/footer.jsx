import React from 'react';
import pic1 from "../images/pic1.PNG"
import pic2 from "../images/pic2.PNG"
import pic3 from "../images/pic3.PNG"
import pic4 from "../images/pic4.PNG"
import pic5 from "../images/pic5.PNG"
import pic6 from "../images/pic6.PNG"
import pic7 from "../images/pic7.PNG"
import pic8 from "../images/pic8.PNG"
function Footer() {
  return (
    <div>
       <div class="container-fluid bg-dark">
      <div class="justify-content-center">
        <div class="col-8 mx-auto p-5 ">
          <div class="row">
            <div class="col-md-3">
              <ul>
                <li><h6 class="text-white my-3">Top Products</h6></li>
                <li class="text-light"> Manage Website</li>
                <li class="text-light"> Manage Reputation</li>
                <li class="text-light"> Power Tools</li>
                <li class="text-light"> Marketing Service</li>
              </ul>
            </div>
            <div class="col-md-6  my-3 pl-5 ">
              <h6 class="text-white mb-3">
                Newsletter
              </h6>
              <p class="text-light">You can trust us, offers, not a single spam</p>
              <div class="row">
                <button class="btn px-5 col-7 bg-light text-dark rounded-pill">Enter Email</button>
                <button class="btn px-2 detailsButton col-4 text-light ml-3 rounded-pill">Subscribe</button>
              </div>
            </div>
            <div class="col-md-3 my-3 pl-3">
              <h6 class="text-white mb-3">
                Instagram Feed
                
              </h6>
              <div class="row">
                <img class="insta" src={pic1} alt=""/>
                <img class="insta" src={pic2} alt=""/>
                <img class="insta" src={pic3} alt=""/>
                <img class="insta" src={pic4} alt=""/>
                <img class="insta" src={pic5} alt=""/>
                <img class="insta" src={pic6} alt=""/>
                <img class="insta" src={pic7} alt=""/>
                <img class="insta" src={pic8} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
