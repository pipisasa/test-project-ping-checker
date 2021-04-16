import classNames from 'classnames';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const {pathname} = useLocation();
  return (
    <div className="paper navbar">
      <ul className="nav">
        <li className={classNames("nav-item",{ active: pathname==="/" })}>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className={classNames("nav-item",{ active: pathname==="/statistics" })}>
          <Link to="/statistics" className="nav-link">Statistics</Link>
        </li>
        <li className={classNames("nav-item",{ active: pathname==="/ping" })}>
          <Link to="/ping" className="nav-link">Ping</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;