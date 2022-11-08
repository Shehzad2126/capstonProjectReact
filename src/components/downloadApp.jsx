import React from 'react';
import andriod from "../images/andriod.png"
import apple from "../images/apple.png"
function DownloadApp() {
  return (
    <div>
        <div class="container-fluid pb-2  section">
      <div class="d-flex py-5 justify-content-center">
        <div class="col-9 p-5">
          <div class="text-center p-5">
            <h3 class="font-weight-bold py-3 text-light">
              Download This App Today!
            </h3>
            <p class="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              quis similique quo, ducimus expedita aspernatur officia neque,
              velit deleniti id!
            </p>
          </div>
          <div class=" mx-auto d-flex justify-content-center col-7">
            <div class="row">
              <div class="col-5 m-2 bg-white">
                <div class="p-1">
                  <div class="row">
                    <div class="col-3 d-flex pt-2 justify-content-center">
                      <img class="imgSize" src={apple} alt=""/>
                    </div>
                    <div class="col-9">
                      <h4>Available</h4>
                      <p>On App Store</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-5 m-2 bg-white">
                <div class="p-1">
                  <div class="row">
                    <div class="col-3 d-flex pt-2 justify-content-center">
                      <img class="imgSize" src={andriod} alt=""/>
                    </div>
                    <div class="col-9">
                      <h4>Available</h4>
                      <p>On Play Store</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DownloadApp;
