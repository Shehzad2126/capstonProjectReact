import React from 'react';
import baloon from "../images/baloon.PNG"
import aim from "../images/aim.PNG"
import key from "../images/key.PNG"
import moon from "../images/moon.PNG"
import pencil from "../images/pencil.PNG"
import success from "../images/success.PNG"
function Services() {
  return (
    <div>
        
    <div class="container-fluid d-flex justify-content-center">
      <div class="col-md-8 text-center p-5">
        <div class="p-5">
          <h3 class="font-weight-bold">Some Features that Made Us Unique</h3>
          <p class="text-secondary">
            Lorem ipsum dolor, sit amet consectetut.
          </p>
          <div class="col-12">
            <div class="row">
              <div class="col-md-4 features bg-light col-sm-6 py-3">
                <img src={aim} alt="" />
                <h5 class="pt-4">Expert Technicians</h5>
              </div>
              <div class="col-md-4 features bg-light col-sm-6 py-3">
                <img src={key} alt="" />
                <h5 class="pt-4">Professional Service</h5>
              </div>
              <div class="col-md-4 features bg-light col-sm-6 py-3">
                <img src={pencil} alt="" />
                <h5 class="pt-4">Great Support</h5>
              </div>
              <div class="col-md-4 features bg-light col-sm-6 py-3">
                <img src={baloon} alt="" />
                <h5 class="pt-4">Expert Technicians</h5>
              </div>
              <div class="col-md-4 features bg-light col-sm-6 py-3">
                <img src={success} alt="" />
                <h5 class="pt-4">Professional Service</h5>
              </div>
              <div class="col-md-4 features bg-light col-sm-6 py-3">
                <img src={aim} alt="" />
                <h5 class="pt-4">Great Support</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Services;
