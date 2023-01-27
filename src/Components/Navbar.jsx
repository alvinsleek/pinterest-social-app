import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class=" bg-dark container-fluid">
    <a class="navbar-brand text-white fw-bolder" >MAVIBU</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-white fw-bold" aria-current="page" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bold" to='/popularposts' >Popular</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bold" to='/createpostform'>Post</Link>
        </li>
      </ul>

      <span class="navbar-text text-white fst-italic ">
        Great Vibes and Good Photos
      </span>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
