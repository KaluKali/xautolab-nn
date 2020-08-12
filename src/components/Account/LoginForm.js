import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logInUser } from '../../store/actions';

class LoginForm extends Component {
  state = {
    mode: 'login',
    email: '',
    password: '',
    message: this.props.message
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.message !== prevState.message) {
      return { message: nextProps.message };
    } return null;
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    if (this.state.mode === 'login') {
      this.props.logInUser({
        email,
        password
      });
    }
  }

  handleEmailChange(e) {
    const email = e.target.value;
    this.setState({ email });
  }

  handlePasswordChange(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  render() {
    const { clearMessage } = this.props;
    return (
      <div className="column is-offset-3 is-6">
        {this.state.message ? (
          <div className="notification is-warning">
            <button className="delete" onClick={clearMessage} />
            {this.state.message}
          </div>
        ) : null}
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <div className="field">
            <label className="label">Почта</label>
            <div className="control">
              <input
                className="input"
                onChange={e => this.handleEmailChange(e)}
                type="email"
                placeholder="Ваш email"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Пароль</label>
            <input
              className="input"
              type="password"
              placeholder="Ваш пароль"
              onChange={e => this.handlePasswordChange(e)}
            />
          </div>
          <div className="control buttons">
            <input
              type="submit"
              value={'Вход'}
              className="button is-primary is-fullwidth"
            />
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  message: state.info.message
});
const mapDispatchToProps = dispatch => ({
  logInUser: user => dispatch(logInUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
