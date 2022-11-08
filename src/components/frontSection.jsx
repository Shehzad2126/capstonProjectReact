import React from 'react';
import phone from "../images/phone.png"
function FrontSection() {
  return (
    <div>
        <div class="container-fluid p-5 section">
      <div class="row">
        <div class="col-md-6 p-5">
          <div class="col-lg-10 m-5 p-4">
            <h1 class="display-4 font-weight-bold text-light">
              The Best App in the Universe
            </h1>
            <p class="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              tempore
            </p>
            <p class="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button
              class="btn btn-light text-uppercase font-weight-bold rounded-pill"
            >
              Load More Item
            </button>
          </div>
        </div>
        <div class="text-center col-md-6 p-5">
          <div class="col-md-10">
            <img class="phone image-fluid" src={phone} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FrontSection;
