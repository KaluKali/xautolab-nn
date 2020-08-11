import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./ProductsList.css";
import { db_products } from '../../db/db';
import { getProductsNext, getProductsPrev } from '../../store/actions/index';
import { connect } from "react-redux";

class ProductsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      page: 1,
      perPage: 5,
      count:0,
      paginationItems: 1
    };

  }

  async componentDidMount() {
    try {
      const pointer = db_products.orderBy('category');
      // todo firebase count documents
      const querySnapshot = await db_products.get();

      let count = querySnapshot.docs.length;

      const paginationItems = Math.ceil(count / this.state.perPage);

      this.props.getProductsNext(pointer, [], this.state.perPage);

      this.setState({ count, paginationItems });
    } catch (error) {
      this.setState({ error });
    }
  }
  renderProducts = () => {
    const { products } = this.props;
    return products.map(product => (
      <tr key={product._id}>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>
          {product.isActive ? (
            <span className="tag is-success">Active</span>
          ) : (
            <span className="tag is-danger">Disabled</span>
          )}
        </td>
        <td>
          {" "}
          <Link
            className="button is-warning"
            to={`/admin/products/edit/${product._id}`}
          >
            Изменить
          </Link>
        </td>
      </tr>
    ));
  };

  nextPage = () => {
    if (this.state.paginationItems > this.state.page && !this.props.isLoading) {
      this.state.page+=1;
      this.props.getProductsNext(this.props.pointer, this.props.lastDoc, this.state.perPage)
    }
  };
  prevPage = () => {
    if (this.state.page > 1 && !this.props.isLoading) {
      this.state.page-=1;
      this.props.getProductsPrev(this.props.pointer, this.props.lastDoc, this.state.perPage)
    }
  };


  render() {
    const { products } = this.props;
    return (
      <div className="products-table-wrapper">
        <header>
          <h3 className="title">Услуги в магазине</h3>
          <p className="subtitle">Всего: {this.state.count}</p>
        </header>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr title="Name">Название</abbr>
              </th>
              <th>
                <abbr title="Category">Категория</abbr>
              </th>
              <th>
                <abbr title="Price">Цена</abbr>
              </th>
              <th>
                <abbr title="Status">Статус</abbr>
              </th>
              <th>
                <abbr title="Action">Изменение</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? this.renderProducts() : null}
          </tbody>
        </table>
        <footer>
          {!this.props.isLoading ? (
              <div className='has-text-centered'>
                <button className="button is-active" onClick={this.prevPage}>Назад</button>
                <button className="button is-primary is-active" onClick={this.nextPage}>Вперед</button>
              </div>
            ) :
            <div className='has-text-centered'>
              <button className="button is-loading">Loading</button>
              <button className="button is-primary is-loading">Loading</button>
            </div>
          }
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lastDoc: state.products.lastDoc,
    products: state.products.products,
    pointer: state.products.pointer,
    isLoading: state.products.isLoading,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getProductsNext: (pointer, lastDoc, perPage) => dispatch(getProductsNext(pointer, lastDoc, perPage)),
    getProductsPrev: (pointer, lastDoc, perPage) => dispatch(getProductsPrev(pointer, lastDoc, perPage))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProductsList));
