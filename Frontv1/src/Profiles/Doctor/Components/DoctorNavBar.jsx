
import CovidLogo from '../../../Assets/SVG/CovidLogo.svg';
// import '../../../index.css';
import { ReactComponent as CaretIcon } from '../../../icons/caret.svg';
import { ReactComponent as CogIcon } from '../../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../../icons/bolt.svg';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";
import HomePage from '../../../Components/Pages/HomePage';

export default function NavBar() {
  return (
    <div >
      <Router>
      <div>
      <Navbar>
   <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>

        <Switch>
          <Route path="/today">
             <Today></Today>
          </Route>

          <Route path="/leave">
             <Leave></Leave>
          </Route>

          <Route path="/history">
           <History></History>
          </Route>

          <Route path="/dprofile">
          <Profile></Profile>
          </Route>

          <Route path="/dmenu">
          <DropdownMenu></DropdownMenu>
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

function Leave() {
  return <h2>Leave</h2>;
}

function Today() {
  return <h2>Today</h2>;
}
function History() {
  return <h2>History</h2>;
}

function Navbar(props) {
  return (
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
      <ul className="navbar-nav">{props.children}</ul>
      </div>
          </div>
        </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <button type="button" className="btn ">
                      Home
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/today">
                    <button type="button" className="btn">
                      Today's Appointment
                    </button>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/leave">
                    <button type="button" className="btn ">
                      Post Leave
                    </button>
                  </Link>
                </li>
                <li className="nav-item">

                  <Link className="nav-link" to="/history">
                    <button type="button" className="btn ">
                     Appointment History
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dprofile">
                    <button type="button" className="btn ">
                     Profile
                    </button>
                  </Link>
                </li>
              
    <li className="nav-item">
      <Link className="nav-link icon-button" to="/dmenu"  onClick={() => setOpen(!open)}>
        {props.icon}
        </Link>

      {open && props.children}
    </li>
    </ul>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="/#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="status">
            status
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'status'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>status</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Available</DropdownItem>
          <DropdownItem leftIcon="🐸">Busy</DropdownItem>
          <DropdownItem leftIcon="🦋">Post Leave</DropdownItem>
          
        </div>
      </CSSTransition>
    </div>
  );
}
