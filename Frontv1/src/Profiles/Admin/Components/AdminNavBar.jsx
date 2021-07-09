

import React from 'react';
import CovidLogo from '../../../Assets/SVG/CovidLogo.svg';
import AdminRoute from './AdminRoute';
import HomePage from '../../../Components/Pages/HomePage';
import DummyPage from '../Pages/DummyPage'


import {BrowserRouter as Router,Switch, Link} from "react-router-dom";

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
                      home
                    </button>
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/patient">
                    <button type="button" className="btn">
                      Patient Details
                    </button>
                  </Link>
                </li>
                

                <li className="nav-item">
                  <Link className="nav-link" to="/doctor">
                    <button type="button" className="btn ">
                      Doctor
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/approv">
                    <button type="button" className="btn ">
                      Approve 
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
         
          <AdminRoute path="/patient" >
            <DummyPage></DummyPage>
          </AdminRoute>

          <AdminRoute path="/doctor" >
          </AdminRoute>

          <AdminRoute path="/approve" >
          </AdminRoute>

          {/* <AdminRoute path="/appointment" >
          </AdminRoute>

          <AdminRoute path="/administration" >
          </AdminRoute> */}

           <AdminRoute path="/" exact>
            <HomePage></HomePage>
          </AdminRoute>

        </Switch>

        {/* <Switch>
          <PrivateRoute path="/adduser">
            <AddUser />
          </PrivateRoute>

          <PrivateRoute path="/user">
            <User />
          </PrivateRoute>

          <PrivateRoute path="/logout">
            <Logout />
          </PrivateRoute>
          <Route path="/">
            <MainPage></MainPage>
          </Route>
        </Switch> */}
      </div>
    </Router>

    </div>
  )
}