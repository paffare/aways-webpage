import React from "react";
import Link from "gatsby-link";
import logo from "../img/aways_logo_black.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="AWAYS" style={{ width: "110px" }} />
              </figure>
            </Link>
            <a
              role="button"
              className={
                this.state.isActive
                  ? "navbar-burger is-active"
                  : "navbar-burger"
              }
              aria-label="menu"
              aria-expanded="false"
              onClick={() => this.setState({ isActive: !this.state.isActive })}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div
            className={
              this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
            }
          >
            <div className="navbar-end">
              <Link className="navbar-item" to="/login">
                LOGIN
              </Link>
              <Link className="navbar-item" to="/signup">
                SIGNUP
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">SHARE</div>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/follow">
                    Instagram
                  </Link>
                  <Link className="navbar-item" to="/follow">
                    Facebook
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">FOLLOW</div>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/follow">
                    Instagram
                  </Link>
                  <Link className="navbar-item" to="/follow">
                    Facebook
                  </Link>
                </div>
              </div>
              <Link className="navbar-item" to="/subscribe">
                SUBSCRIBE
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
