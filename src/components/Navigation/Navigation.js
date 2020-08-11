import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { user } from "react-icons-kit/ikons/user";
import { ic_build as adminIcon } from "react-icons-kit/md/ic_build";

import "./Navigation.css";

class Navigation extends Component {
  state = {
    isMobileMenuOpen: false
  };

  componentDidUpdate(prevProps) {
    const currentLocation = this.props.location.key;
    const previousLocation = prevProps.location.key;
    if (currentLocation !== previousLocation) {
      this.setState({ isMobileMenuOpen: false });
    }
  }

  menuOpenHandler = () => {
    this.setState(prevState => {
      return { isMobileMenuOpen: !prevState.isMobileMenuOpen };
    });
  };

  render() {
    return (
      <nav
        className="navbar has-background-white "
        aria-label="main navigation"
      >
        <div className="container container--paddingless">
          <div className="navbar-brand">
            <div
              className={`navbar-burger burger  ${this.state.isMobileMenuOpen &&
              "is-active"}`}
              onClick={this.menuOpenHandler}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            className={`navbar-menu  ${this.state.isMobileMenuOpen &&
            "is-active"}`}
          >
            <div className="navbar-end ">
              <Link to="/category/remtormsys" className="navbar-item has-text-dark ">
                Тормозная сис-ма
              </Link>
              <Link to="/category/remtoplsys" className="navbar-item has-text-dark ">
                Топливная сис-ма
              </Link>
              <Link to="/category/dvc" className="navbar-item has-text-dark ">
                ДВС
              </Link>
              <Link
                to="/category/mkppakpp"
                className="navbar-item has-text-dark "
              >
                АКПП/МКПП
              </Link>
              <Link
                to="/category/autoelect"
                className="navbar-item has-text-dark "
              >
                Автоэлектрика
              </Link>
              <Link
                to="/category/texobs"
                className="navbar-item has-text-dark "
              >
                Тех. обслуживание
              </Link>
              {this.props.isAdmin ? (
                <Link to="/admin" className="navbar-item has-text-dark ">
                  <Icon className="navbar-icon" icon={adminIcon} />
                </Link>
              ) : null}
              <Link to="/my-account" className="navbar-item has-text-dark ">
                <Icon className="navbar-icon" icon={user} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
