import React from 'react';
import { Router, Route, Link } from 'react-router';

export default function Header(props) {
  return (
    <nav className="navbar navbar-default main-nav">
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to='/' activeClassName='active' onlyActiveOnIndex={true}>Chart</Link></li>
          <li><Link to='/import' activeClassName='active'>Import</Link></li>
        </ul>
      </div>
    </nav>
  );
};
