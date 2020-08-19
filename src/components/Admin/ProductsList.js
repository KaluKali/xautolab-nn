import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './ProductsList.css';
import { connect } from 'react-redux';
import { db_products } from '../../db/db';
import { getProductsNext, getProductsPrev } from '../../store/actions/index';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      page: 1,
      perPage: 5,
      count: 0,
      paginationItems: 1
    };
  }

  async componentDidMount() {
    try {
      const pointer = db_products.orderBy('category');
      // todo firebase count documents
      const querySnapshot = await db_products.get();
      querySnapshot.docs.map(async (doc) => {
        let doc_data = doc.data();
        doc_data.pictures[0] = doc_data.pictures[0].replace('http://kalukali.pw/','http://xautolab.ru/');
        await db_products.doc(doc.id).set(doc_data);
      });
      const count = querySnapshot.docs.length;

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
          {' '}
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
      this.state.page += 1;
      this.props.getProductsNext(this.props.pointer, this.props.lastDoc, this.state.perPage);
    }
  };

  prevPage = () => {
    if (this.state.page > 1 && !this.props.isLoading) {
      this.state.page -= 1;
      this.props.getProductsPrev(this.props.pointer, this.props.lastDoc, this.state.perPage);
    }
  };

  render() {
    const { products } = this.props;
    return (
      <div className="products-table-wrapper">
        <header>
          <h2 className="title has-text-white">Услуги в магазине</h2>
          <p className="subtitle has-text-white">Всего: {this.state.count}</p>
        </header>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>
                <p title="Name">Название</p>
              </th>
              <th>
                <p title="Category">Категория</p>
              </th>
              <th>
                <p title="Price">Цена</p>
              </th>
              <th>
                <p title="Status">Статус</p>
              </th>
              <th>
                <p title="Action">Изменение</p>
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
          )
            : <div className='has-text-centered'>
              <button className="button is-loading">Loading</button>
              <button className="button is-primary is-loading">Loading</button>
            </div>
          }
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lastDoc: state.products.lastDoc,
  products: state.products.products,
  pointer: state.products.pointer,
  isLoading: state.products.isLoading,
});
const mapDispatchToProps = dispatch => ({
  getProductsNext:
    (pointer, lastDoc, perPage) => dispatch(getProductsNext(pointer, lastDoc, perPage)),
  getProductsPrev:
    (pointer, lastDoc, perPage) => dispatch(getProductsPrev(pointer, lastDoc, perPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsList));
