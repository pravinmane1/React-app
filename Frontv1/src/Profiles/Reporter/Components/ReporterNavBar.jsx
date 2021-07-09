import React from 'react';
import CovidLogo from '../../../Assets/SVG/CovidLogo.svg';
import HomePage from '../../../Components/Pages/HomePage';

import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";

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
                  <Link className="nav-link" to="/todays">
                    <button type="button" className="btn">
                      Today's Appointments
                    </button>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/availables">
                    <button type="button" className="btn ">
                      Avaliable Doctors
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/doctors">
                    <button type="button" className="btn ">
                    Doctor on Leave
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/rprofile">
                    <button type="button" className="btn ">
                     Profile
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/todays">
             <Today></Today>
          </Route>

          <Route path="/availables">
            <Ava></Ava>
          </Route>

          <Route path="/doctors">
           <Doc></Doc>
          </Route>

          <Route path="/rprofile">
          <Profile></Profile>
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
function Profile() {
  return <h2>Profile</h2>;
}

function Ava() {
  return <h2>Avalables</h2>;
}

function Today() {
  return <h2>Today</h2>;
}
function Doc() {
  return <h2>DOctors</h2>;
}