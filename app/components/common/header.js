import React from "react";
import PsLogo from '../../images/ps-logo1.png'
import 'bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/#home" className="navbar-brand">
              <img src={PsLogo} height="60" />
            </a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#authors">Authors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Header;
