import React from 'react';

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
                <img class="insta" src="images/pic1.PNG" alt=""/>
                <img class="insta" src="images/pic2.PNG" alt=""/>
                <img class="insta" src="images/pic3.PNG" alt=""/>
                <img class="insta" src="images/pic4.PNG" alt=""/>
                <img class="insta" src="images/pic5.PNG" alt=""/>
                <img class="insta" src="images/pic6.PNG" alt=""/>
                <img class="insta" src="images/pic7.PNG" alt=""/>
                <img class="insta" src="images/pic8.PNG" alt=""/>
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
