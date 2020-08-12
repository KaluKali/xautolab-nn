import React, { Component, Fragment } from 'react';
import {
  Switch, Link, Route, withRouter
} from 'react-router-dom';
import ProductEditForm from './ProductEditForm';
import ProductsList from './ProductsList';
import './Admin.css';

class Admin extends Component {
  render() {
    return (
      <Fragment>
        <div className="admin-actions">
          <div className="columns">
            <div className="column ">
              <Link
                to={`${this.props.match.path}/products/add-new`}
                className="button is-medium is-success is-fullwidth button-tile"
              >
                Добавить товар
              </Link>
            </div>
            <div className="column ">
              <Link
                to={`${this.props.match.path}/products/list`}
                className="button is-medium is-link is-fullwidth button-tile"
              >
                Редактировать товар
              </Link>
            </div>
            <div className="column">
              <Link
                to="/my-account"
                className="button is-medium is-primary is-fullwidth button-tile"
              >
                Аккаунт
              </Link>
            </div>
            <div className="column">
              <button className="button is-medium is-warning is-inverted is-fullwidth button-tile">
                Выход
              </button>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-8">
            <Switch>
              <Route
                path={`${this.props.match.path}/products/add-new`}
                component={ProductEditForm}
              />
              <Route
                path={`${this.props.match.path}/products/edit/:productId`}
                component={ProductEditForm}
              />
              <Route
                path={`${this.props.match.path}/products/list`}
                component={ProductsList}
              />
              <Route
                path={`${this.props.match.path}/products/delete/:productId`}
                component={ProductsList}
              />
            </Switch>
          </div>
          <aside className="column is-4" />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Admin);
