import React, { Component, Fragment } from "react";

import CategoryHeader from "../components/CategoryHeader";
import ProductCard from "../components/ProductCard";
import ProductPreview from "../components/ProductPreview";
import ModalBlank from "../components/UI/Modals/ModalBlank";
import Loader from "../components/UI/Loaders/Loader";
import { db_products } from '../db/db'
import Alert from "../components/UI/Alerts/Alert";

class CategoryPage extends Component {
  state = {
    categoryName: "",
    productsInCategory: [],
    currentProduct: "",
    isModalActive: false,
    isLoading: true,
    error: ""
  };

  // setting state when component mounts first time
  async componentDidMount() {
    const { categoryName } = this.props.match.params;
    try {
      const docs = await db_products.where('category', '==', categoryName).get();
      let productsInCategory = [];
      docs.docs.map((doc) => productsInCategory.push({_id:doc.id,...doc.data()}));
      this.setState({
        categoryName,
        productsInCategory,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        error: true
      });
    }
  }

  // if route changes fetching and filtering products
  async componentDidUpdate(prevProps) {
    const currentCategoryName = this.props.match.params.categoryName;
    const previousCategoryName = prevProps.match.params.categoryName;

    if (currentCategoryName !== previousCategoryName) {
      this.setState({ isLoading: true });

      try {
        const docs = await db_products.where('category', '==', currentCategoryName).get();
        let productsInCategory = [];
        docs.docs.map((doc) => productsInCategory.push({_id:doc.id,...doc.data()}));

        this.setState({
          categoryName: currentCategoryName,
          productsInCategory,
          isLoading: false
        });
      } catch (error) {
        console.log(error);
        this.setState({
          isLoading: false,
          error: true
        });
      }
    }
  }

  componentWillUnmount() {
    this.setState({
      categoryName: "",
      productsInCategory: [],
      currentProduct: "",
      isModalActive: false
    });
  }

  showProductPreview = _id => {
    const currentProduct = this.state.productsInCategory.find(
      product => product._id === _id
    );
    this.setState({ currentProduct, isModalActive: true });
  };

  closeProductPreview = () => {
    this.setState({ isModalActive: false });
  };

  alertCloseHandler = () => {
    this.setState({ error: false });
  };

  render() {
    const {
      categoryName,
      isModalActive,
      currentProduct,
      productsInCategory,
      error,
      isLoading
    } = this.state;

    const productCards = productsInCategory.map(product => (product.isActive ? (
      <div key={product._id} className="column is-4-tablet is-3-widescreen">
        <ProductCard
          product={product}
          onQuickViewOpenHandler={() => this.showProductPreview(product._id)}
        />
      </div>
    ) : null));

    return (
      <section className="section">
        <div className="container">
          <CategoryHeader title={categoryName} />
          {error ? (
            <Alert
              message="Проблема с сетью, попробуйте перезагрузить страницу."
              onCloseHandler={this.alertCloseHandler}
            />
          ) : isLoading ? (
            <div className="loader-wrapper">
              <Loader/>
            </div>
          ) : (
            <Fragment>
              <div className="columns is-multiline">{productCards}</div>
              <ModalBlank
                isModalActive={isModalActive}
                onCloseClick={this.closeProductPreview}
              >
                <ProductPreview product={{ ...currentProduct }} />
              </ModalBlank>
            </Fragment>
          )}
        </div>
      </section>
    );
  }
}

export default CategoryPage;
