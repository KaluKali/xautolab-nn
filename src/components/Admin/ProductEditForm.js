import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductEditForm.css';
import { db_products } from '../../db/db';
import categoryNames from '../../db/categories';

class ProductEditForm extends Component {
  state = {
    name: '',
    price: '',
    pictures: [],
    tags: [],
    color: '',
    discount: 0,
    category: 'overall',
    subprice: '',
    description: '',
    isActive: true,
    tag: '',
    picture: ''
  };

  componentDidMount() {
    const { productId } = this.props.match.params;

    if (productId) {
      db_products.doc(productId)
        .get()
        .then(doc => {
          const product = doc.data();
          this.setState({
            name: product.name,
            price: product.price,
            pictures: product.pictures,
            tags: product.tags,
            color: product.color,
            discount: product.discount,
            category: product.category,
            subprice: product.subprice,
            description: product.description,
            isActive: 'true'
          });
        });
    }
  }

  handleFormChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleFormClear = () => {
    this.setState({
      name: '',
      price: '',
      pictures: [],
      tags: [],
      color: '',
      discount: 0,
      category: '',
      description: '',
      subprice: '',
      isActive: true,
      tag: '',
      picture: ''
    });

    this.props.history.push('/admin/products/list');
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const { productId } = this.props.match.params;
    if (productId) {
      // update
      try {
        await db_products.doc(productId).set({
          name: this.state.name,
          price: parseInt(this.state.price),
          pictures: this.state.pictures,
          tags: this.state.tags,
          color: this.state.color,
          discount: parseInt(this.state.discount),
          category: this.state.category,
          subprice: this.state.subprice,
          description: this.state.description,
          isActive: this.state.isActive === 'true'
        });
        this.handleFormClear();
      } catch (error) {
        console.log(error);
      }
    } else {
      // add
      try {
        await db_products.add({
          name: this.state.name,
          price: parseInt(this.state.price),
          pictures: this.state.pictures,
          tags: this.state.tags,
          color: this.state.color,
          discount: parseInt(this.state.discount),
          category: this.state.category,
          subprice: this.state.subprice,
          description: this.state.description,
          isActive: this.state.isActive === 'true'
        });
        this.handleFormClear();
      } catch (error) {
        console.log(error);
      }
    }
  };

  handleTagAdd = e => {
    e.preventDefault();
    this.setState(prevState => ({ tags: [...prevState.tags, this.state.tag], tag: '' }));
  };

  handlePictureAdd = e => {
    e.preventDefault();

    this.setState(prevState => ({
      picture: '',
      pictures: [...prevState.pictures, prevState.picture]
    }));
  };

  handlePictureRemove = deletedPic => {
    this.setState(prevState => ({
      pictures: [
        ...prevState.pictures.filter(picture => picture !== deletedPic)
      ]
    }));
  };

  renderTags = () => this.state.tags.map(tag => (
    <span className="tag is-warning" key={tag}>
      {tag}
      <button
        className="delete is-small"
        onClick={() => this.handleTagRemove(tag)}
      />
    </span>
  ));

  handleTagRemove = delTagName => {
    this.setState(prevState => ({
      tags: [...prevState.tags.filter(tag => tag !== delTagName)]
    }));
  };

  renderPicturesLinks = () => this.state.pictures.map(pictureLink => (
    <span className="tag is-warning" key={pictureLink}>
      {pictureLink}
      <button
        className="delete is-small"
        onClick={() => this.handlePictureRemove(pictureLink)}
      />
    </span>
  ));

  render() {
    const { productId } = this.props.match.params;

    return (
      <form className="product-edit-form" onSubmit={this.handleFormSubmit}>
        <h2 className="title has-text-white">
          {productId ? `Изменяемый товар: ${productId}` : 'Добавить новый товар'}
        </h2>
        <div className="field">
          <label htmlFor="name" className="label">
            Название
          </label>
          <div className="control">
            <input
              value={this.state.name}
              onChange={this.handleFormChange}
              className="input"
              name="name"
              id="name"
              type="text"
              placeholder="Название товара"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="subprice" className="label">
            До цены
          </label>
          <div className="control">
            <input
              value={this.state.subprice}
              onChange={this.handleFormChange}
              className="input"
              name="subprice"
              id="subprice"
              type="text"
              placeholder="до цены (пример: %до цены% %цена%)"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="price" className="label">
            Цена
          </label>
          <div className="control">
            <input
              value={this.state.price}
              onChange={this.handleFormChange}
              className="input"
              name="price"
              id="price"
              type="number"
              step="0.1"
              placeholder="Цена товара"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Активность</label>
          <div className="control">
            <label className="radio has-text-white has-text-weight-bold">
              <input
                onChange={this.handleFormChange}
                type="radio"
                name="isActive"
                value="true"
                defaultChecked={true}
              />
              Видимый
            </label>
            <label className="radio has-text-white has-text-weight-bold">
              <input
                onChange={this.handleFormChange}
                type="radio"
                name="isActive"
                value="false"
                defaultChecked={false}
              />
              Не видимый
            </label>
          </div>
        </div>
        <div className="field">
          <label htmlFor="pictures" className="label">
            URL картинки
          </label>
          <div className="control columns">
            <div className="column is-8">
              <input
                value={this.state.picture}
                onChange={this.handleFormChange}
                className="input"
                name="picture"
                id="picture"
                type="text"
                placeholder="URL картинки"
              />
            </div>
            <div className="column">
              <button
                disabled={this.state.picture.trim() === ''}
                className="button is-light"
                onClick={this.handlePictureAdd}
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
        {this.state.pictures.length > 0 ? (
          <Fragment>
            <p>Добавлено</p>
            <div className="columns">
              <div className="column">{this.renderPicturesLinks()}</div>
            </div>
          </Fragment>
        ) : null}
        <div className="field">
          <label htmlFor="tag" className="label">
            Тэги
          </label>
          <div className="control columns">
            <div className="column is-8">
              <input
                value={this.state.tag}
                onChange={this.handleFormChange}
                className="input"
                name="tag"
                id="tag"
                type="text"
                placeholder="Тэг"
              />
            </div>
            <div className="column">
              <button
                disabled={this.state.tag.trim() === ''}
                className="button is-light"
                onClick={this.handleTagAdd}
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
        {this.state.tags.length > 0 ? (
          <Fragment>
            <p>Добавлено</p>
            <div className="columns">
              <div className="column">{this.renderTags()}</div>
            </div>
          </Fragment>
        ) : null}

        <div className="field">
          <label htmlFor="color" className="label">
            Цвет (3 цифры)
          </label>
          <div className="control">
            <input
              value={this.state.color}
              onChange={this.handleFormChange}
              className="input"
              name="color"
              id="color"
              type="text"
              placeholder="Цвет"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="discount" className="label">
            Скидка
          </label>
          <div className="control">
            <input
              value={this.state.discount}
              onChange={this.handleFormChange}
              className="input"
              name="discount"
              id="discount"
              type="number"
              min={0}
              placeholder="Процент скидки"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="category" className="label">
            Категория
          </label>
          <div className="control">
            <div className="select">
              <select
                value={this.state.category}
                name="category"
                id="category"
                onChange={this.handleFormChange}
              >
                {
                  Object.keys(categoryNames).map((name, key) => (
                    <option value={name} key={key}>{categoryNames[name].name}</option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>
        <div htmlFor="description" className="field">
          <label className="label">Комментарий к продукту</label>
          <div className="control">
            <textarea
              value={this.state.description}
              onChange={this.handleFormChange}
              name="description"
              id="description"
              className="textarea"
              placeholder="Комментарий"
            />
          </div>
        </div>
        <div className="field">
          <div className="field-label" />
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary button-submit">
                  {productId ? 'Обновить' : 'Добавить'}
                </button>

                <button
                  onClick={this.handleFormClear}
                  className="button is-danger"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(ProductEditForm);
