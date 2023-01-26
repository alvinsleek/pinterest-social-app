import React from "react";
import { Link } from 'react-router-dom'

function Navbar () {


    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <p className="navbar-brand fw-bold text-white" >MAVIBU</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active fw-bold text-white" aria-current="page" to="/">HomePage</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white" to='popularposts'>Popular</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white" to='postlist'>Feed</Link>
        </li>
      </ul>
      <span className="navbar-text fw-bold text-white">
        Vibes and Inshallah
      </span>
    </div>
  </div>
</nav>
        
        
        </>
        
        )

};

export default Navbar;