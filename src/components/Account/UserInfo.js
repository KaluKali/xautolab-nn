import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UserInfo.css';
import { logOutUser, updateUserDetails } from '../../store/actions';

import Loader from '../UI/Loaders/Loader';

class UserInfo extends Component {
  state = {
    loading: false,
    editing: false,
    userEmail: this.props.user.userEmail,
    name: this.props.user.name,
    secondName: this.props.user.secondName,
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.user !== prevState.message) {
  //     return { message: nextProps.message };
  //   } else return null;
  // }

  handleLogOut = () => {
    this.props.logOutUser();
  };

  handleDetailsUpdate = () => {
    if (this.state.editing === false) {
      this.setState(prevState => ({ editing: !prevState.editing }));
    } else {
      const user = {
        userEmail: this.props.user.userEmail,
        name: this.state.name,
        secondName: this.state.secondName
      };
      this.props.updateUserDetails(user);
      this.setState(prevState => ({ editing: !prevState.editing }));
    }
  };

  handleCancelUpdate = () => {
    this.setState(prevState => ({ editing: !prevState.editing }));
  };

  handleInputChange = (e, field) => {
    const { value } = e.target;
    this.setState({
      [field]: value
    });
  };

  render() {
    let userInfo = (
      <div className="columns">
        <div className="column user-info__details">
          <div className="user-info__name">
            <span className="is-size-7 is-italic has-text-grey-light">
              First name:
            </span>
            <p>{this.props.user.name}</p>
          </div>
          <div className="user-info__sec-name">
            <span className="is-size-7 is-italic has-text-grey-light">
              Second name:
            </span>
            <p>{this.props.user.secondName}</p>
          </div>
          <div className="user-info__email">
            <span className="is-size-7 is-italic has-text-grey-light">
              email:
            </span>
            <p>{this.props.user.userEmail}</p>
          </div>
        </div>
        <div className="column is-2 user-info__action buttons control">
          <button
            onClick={this.handleLogOut}
            className="button is-warning is-inverted is-fullwidth is-small"
          >
            Выход
          </button>
          <button
            onClick={this.handleDetailsUpdate}
            className="button is-warning is-inverted is-fullwidth is-small "
          >
            Обновить информацию
          </button>
        </div>
      </div>
    );

    if (this.state.editing) {
      userInfo = (
        <div className="columns">
          <form className="column">
            <div className="columns">
              <div className="column user-info__details">
                <div className="user-info__name">
                  <label className="is-size-7 is-italic has-text-grey-light">
                    First name:
                  </label>
                  <input
                    className="input"
                    onChange={e => this.handleInputChange(e, 'name')}
                    name="name"
                    type="text"
                    placeholder={`current ${this.props.user.name}`}
                  />
                </div>
                <div className="user-info__sec-name">
                  <label className="is-size-7 is-italic has-text-grey-light">
                    Second name:
                  </label>
                  <input
                    className="input"
                    name="secondName"
                    onChange={e => this.handleInputChange(e, 'secondName')}
                    type="text"
                    placeholder={`current ${this.props.user.secondName}`}
                  />
                </div>
                <div className="user-info__email">
                  <label className="is-size-7 is-italic has-text-grey-light">
                    email:
                  </label>
                  <p>{this.state.userEmail}</p>
                </div>
              </div>
            </div>
          </form>
          <div className="column is-2 user-info__action buttons control">
            <button
              onClick={this.handleLogOut}
              className="button is-warning is-inverted is-fullwidth is-small log-out-button "
            >
              Выход
            </button>
            <button
              onClick={this.handleDetailsUpdate}
              className="button is-warning is-inverted is-fullwidth is-outlined is-small is-inverted "
            >
              {this.state.editing ? 'Сохранить' : 'Изменить'}
            </button>
            <button
              onClick={this.handleCancelUpdate}
              className="button is-warning is-inverted is-fullwidth is-outlined is-small is-inverted "
            >
              Отменить изменения
            </button>
          </div>
        </div>
      );
    }

    return (
      <section className="user-info is-relative">
        {this.state.loading ? <Loader /> : userInfo}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  updateUserDetails: user => dispatch(updateUserDetails(user)),
  logOutUser: () => dispatch(logOutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
