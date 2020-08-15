import React, { Component } from 'react';
import { connect } from 'react-redux';

import Admin from '../components/Admin/Admin';
import SubPageHeader from '../components/SubPageHeader';
import LoginForm from '../components/Account/LoginForm';

class AdminPage extends Component {
  render() {
    const { isAdmin } = this.props.user;
    return (
      <div>
        <div className="container">
          <SubPageHeader title="Панель администратора"/>
        </div>
        <div className="container">
          {isAdmin ? (
            <Admin />
          ) : (
            <div className="columns">
              <LoginForm />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AdminPage);
