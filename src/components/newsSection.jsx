import React from 'react';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
function NewsSection() {
  return (
    <div>
        <div class="container-fluid d-flex justify-content-center">
      <div class="col-md-8 text-center p-5">
        <div class="p-5">
          <h1 class="dilpay-5">Latest News from all Categories</h1>
          <p class="text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            quisquam quo, magnam perferendis, minima aperiam unde.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4 p-3 col-md-6">
            <AutoFixHighIcon/>
            <h4 class="py-4">Maintanence</h4>
            <p class="text-secondary">
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That’s why.
            </p>
          </div>
          <div class="col-lg-4 p-3 col-md-6">
            <MiscellaneousServicesIcon/>
            <h4 class="py-4">Residential Service</h4>
            <p class="text-secondary">
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That’s why.
            </p>
          </div>
          <div class="col-lg-4 p-3 col-md-6">
            <ElectricalServicesIcon/>
            <h4 class="py-4">Commercial Service</h4>
            <p class="text-secondary">
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That’s why.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default NewsSection;
