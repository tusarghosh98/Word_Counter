import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
return (
  <div>
  <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid" >
          <Link className="navbar-brand" to="/home">Home</Link>
          <Link className="navbar-brand" to="/">TextUtils</Link>
          <Link className="navbar-brand" to="/about">About</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link className="nav-a active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item mx-3">
                      <Link className="nav-a active" aria-current="page" to="/about">About</Link>
                  </li>
              </ul> */}
              {/* <form className="d-flex" role="search">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
<button className="btn btn-outline-success" type="submit">Search</button>
</form> */}
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                  <input className="form-check-input " onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
              </div>
          </div>
      </div>
  </nav>
</div>
)}
// Navbar.propTypes = {
//     home: PropTypes.string.isRequired,
//     title: PropTypes.string,

//   }; 
// Navbar.defaultProps={
//     title : "Title",
//     home : "Home"
// }

