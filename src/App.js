import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import 'bulma/css/bulma.min.css';
import 'bulma-tooltip';
import './App.css';
import { userLoggedIn } from './store/actions';
import { auth } from './db/db';

import SocialLinks from './components/Navigation/SocialLinks';
import NavigationContact from './components/Navigation/NavigationContact';
import Navigation from './components/Navigation/Navigation';
import AppHeader from './components/AppHeader';
import FrontPage from './Screens/FrontPage';
import CategoryPage from './Screens/CategoryPage';
import ContactPage from './Screens/ContactPage';
import AdminPage from './Screens/AdminPage';

class App extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.userLoggedIn(user);
      }
    });
  }

  render() {
    return (
      <div>
        <SocialLinks/>
        <NavigationContact/>
        <Navigation isAdmin={this.props.user.isAdmin} />
        <AppHeader />
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/category/:categoryName" component={CategoryPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/admin" component={AdminPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  userLoggedIn: user => dispatch(userLoggedIn(user.email))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
