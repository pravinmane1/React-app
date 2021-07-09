import React from 'react';
import CovidLogo from '../../Assets/SVG/CovidLogo.svg';
import Login from '../../Components/Pages/Login';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import HomePage from '../Pages/HomePage';
// import Dregister from '../Pages/Dregister';
// import Register from '../Pages/Register';
import SignUp from '../Pages/SignUp';

export default function NavBar() {
  return (
    <div >
       <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container">
            <img className="rounded-circle logo  " src={CovidLogo} alt="" />

            <button
              className="navbar-toggler position-absolute top-0 end-0 mt-3 me-3 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-around"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <button type="button" className="btn ">
                      Home
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    <button type="button" className="btn">
                      Contact Us
                    </button>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    <button type="button" className="btn ">
                      About Us
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <button type="button" className="btn ">
                      Login
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/SignUp">
                    <button type="button" className="btn ">
               signup
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/contact">
             <Contact></Contact>
          </Route>

          <Route path="/about">
             <About></About>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/SignUp">
          <SignUp></SignUp>
          </Route>

          <Route path="/">
          <HomePage></HomePage>
          </Route>

        </Switch>
      </div>
    </Router>
    </div>
  )
}


function Contact() {
  return <h2>Contact</h2>;
}

function About() {
  return <h2>About</h2>;
}