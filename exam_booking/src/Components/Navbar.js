import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className="col-lg-4 bg-secondary " style={{height:"100vh"}}>
          <div className="row">
            <div className="col-lg-12">
              <h1 className='text-center'> Exam Seat Booking</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <nav id="navbar-example3" className="navbar navbar-dark">
                <nav className="nav nav-pills flex-column  col-lg-12 ">
                  <Link className="nav-link text-dark bg-white my-2 " to={"/"} >
                   Home
                  </Link>
                  <Link className="nav-link text-dark bg-white my-2 " to={"/"} >
                  Profile
                  </Link>
                  <Link className="nav-link text-dark bg-white my-2 " to={"/"} >
                  Settings
                  </Link>
                </nav>
              </nav>
            </div>
          </div>
        </div>
  )
}

export default Navbar
