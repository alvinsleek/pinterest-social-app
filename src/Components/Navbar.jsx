import React from "react";

function Navbar () {


    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold text-white" href="#">MAVIBU</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active fw-bold text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold text-white" href="#">Profiles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold text-white" href="#">Topics</a>
        </li>
      </ul>
      <span class="navbar-text fw-bold text-white">
        Vibes and Inshallah
      </span>
    </div>
  </div>
</nav>
        
        
        </>
        
        )

};

export default Navbar;