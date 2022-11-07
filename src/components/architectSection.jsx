import React from 'react';

function Architect() {
  return (
    <div>
        <div class="container-fluid p-5 justify-content-center bg-light">
      <div class="row">
        <div class="left col-md-5 p-5 ml-auto">
          <h1 class="display-5 font-weight-bold">
            We Believe that Interior Beautifies the Total Architecture
          </h1>
          <p class="py-5 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            quaerat ipsa sequi ad earum libero ullam nostrum, nemo unde ut
            facere ratione repellendus minima veniam architecto vero
            voluptatibus adipisci eum. ipsa sequi ad earum libero ullam nostrum,
            nemo unde ut facere ratione repellendus minima veniam architecto
            repellendus minima veniam architecto veri eum.
          </p>
          <button
            class="btn detailsButton text-light text-uppercase px-5 py-2 rounded-pill"
          >
            See Details
          </button>
        </div>
        <div class="right col-md-5 mr-auto">
          <div class="row">
            <img class="col-6" src="images/Capture1.PNG" alt="" />
            <img class="col-6" src="images/Capture2.PNG" alt="" />
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default Architect;
