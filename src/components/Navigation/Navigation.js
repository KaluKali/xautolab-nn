import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_build as adminIcon } from 'react-icons-kit/md/ic_build';

import './Navigation.css';

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
    this.setState(prevState => ({ isMobileMenuOpen: !prevState.isMobileMenuOpen }));
  };

  render() {
    return (
      <nav className="navbar has-background-black" aria-label="main navigation">
        <div className="container container--paddingless">
          <div className="navbar-brand">
            <div
              className={`navbar-burger burger has-text-white ${this.state.isMobileMenuOpen
              && 'is-active'}`}
              onClick={this.menuOpenHandler}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            className={`navbar-menu has-background-black ${this.state.isMobileMenuOpen
            && 'is-active'}`}
          >
            <div className="navbar-end">
              <Link to="/category/profdiag" className="navbar-item has-text-white has-background-black has-text-weight-bold">
                Проф. диагностика
              </Link>
              <Link to="/category/remtormsys" className="navbar-item has-text-white has-background-black has-text-weight-bold">
                Тормозная сис-ма
              </Link>
              <Link to="/category/remtoplsys" className="navbar-item has-text-white has-background-black has-text-weight-bold">
                Топливная сис-ма
              </Link>
              <Link to="/category/dvc" className="navbar-item has-text-white has-background-black has-text-weight-bold">
                ДВС
              </Link>
              <Link to="/category/mkppakpp" className="navbar-item has-text-white has-background-black has-text-weight-bold">
                АКПП/МКПП
              </Link>
              <Link to="/category/autoelect" className="navbar-item has-text-white has-background-black has-text-weight-bold">
                Автоэлектрика
              </Link>
              <Link to="/category/texobs" className="navbar-item has-text-white has-background-black has-text-weight-bold">
                Тех. обслуживание
              </Link>
              {this.props.isAdmin ? (
                <Link to="/admin" className="navbar-item has-text-white has-background-black">
                  <Icon className="navbar-icon" icon={adminIcon} />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
