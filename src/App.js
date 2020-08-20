import React, { Component, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import 'bulma/css/bulma.min.css';
import 'bulma-tooltip';
import './App.css';

import SocialLinks from './components/Navigation/SocialLinks';
import NavigationContact from './components/Navigation/NavigationContact';
import Navigation from './components/Navigation/Navigation';
import AppHeader from './components/AppHeader';
import FrontPage from './Screens/FrontPage';
import Loader from './components/UI/Loaders/Loader';

const AdminPage = React.lazy(() => import('./Screens/AdminPage'));
const CategoryPage = React.lazy(() => import('./Screens/CategoryPage'));

class App extends Component {
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
            <Route path="/category/:categoryName" render={() => (<Suspense fallback={<Loader/>}><CategoryPage /> </Suspense>)} />
            <Route path="/admin" render={() => (<Suspense fallback={<Loader/>}><AdminPage /> </Suspense>)} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
