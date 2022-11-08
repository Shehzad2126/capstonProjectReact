import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
function Navbar(){
    return <div>
<div class="container sec">
      <nav
        class="navbar navbar-expand-lg px-5 py-3 mx-5 justify-content-around"
      >
        <a className="navbar-brand text-uppercase text-dark" href="https://www.google.com/">
          <i class="fa-duotone fa-command bg-primary"></i>
          <AcUnitIcon/> Apps
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item text-dark px-2 px-2 active">
              <a class="nav-link text-uppercase text-dark" href="https://www.google.com/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link text-uppercase text-dark" href="https://www.google.com/">Service</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link text-uppercase text-dark" href="https://www.google.com/">Features</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link text-uppercase text-dark" href="https://www.google.com/">Price</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link text-uppercase text-dark" href="https://www.google.com/">FAQs</a>
            </li>
            <li class="nav-item px-2 dropdown">
              <a
                class="nav-link text-uppercase text-dark dropdown-toggle"
                href="https://www.google.com/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://www.google.com/">Action</a>
                <a class="dropdown-item" href="https://www.google.com/">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="https://www.google.com/">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
}

export default Navbar;