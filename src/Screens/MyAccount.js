import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { logOutUser } from "../store/actions/";

import SubPageHeader from "../components/SubPageHeader";
import LoginForm from "../components/Account/LoginForm";
import UserInfo from "../components/Account/UserInfo";

class MyAccount extends Component {
  state = {
    userEmail: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.userEmail !== prevState.userEmail) {
      return { userEmail: nextProps.user.userEmail };
    } else return null;
  }

  render() {
    const { isUserLogged } = this.props;

    return (
      <section className="section">
        <div className="container">
          <SubPageHeader
            title="Аккаунт"
          />
          {isUserLogged ? (
            <Fragment>
              <UserInfo user={this.state.userEmail} />
            </Fragment>
          ) : (
            <div className="columns">
              <LoginForm />
            </div>
          )}
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    isUserLogged: state.user.isLogged,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOutUser: () => dispatch(logOutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);
