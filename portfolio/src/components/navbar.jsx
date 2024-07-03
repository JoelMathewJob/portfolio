import React from 'react';
import { CgGames } from 'react-icons/cg';
import images from '../images/images'; // Adjust the import to your actual path

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position:'static', width:'100%', height:'55%'}}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <a className="navbar-brand" href="#">
            <img src={images.logo} alt='Joel Job' width="100" height="100" style={{ objectFit: 'contain', borderRadius: '50%' }} />
          </a> */}
          <a className="navbar-brand" style={{ fontFamily: 'poppins', fontWeight: 'bolder', fontSize: '20px',margin:'5px' }} href="#">Joel Mathew Job</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{gap:'30px', marginLeft:'20px'}}>
              
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#connect">Connect</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#"><CgGames size={25} /></a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <a href='#connect'><button className="btn btn-outline-success active" type="button" style={{marginRight:'40px'}}>Contact Me</button></a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
