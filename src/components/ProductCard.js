import React from 'react';
import { Icon } from 'react-icons-kit';
import { circleRight } from 'react-icons-kit/icomoon/circleRight';
import { eye } from 'react-icons-kit/icomoon/eye';

import './ProductCard.css';

import DiscountInfo from './DiscountInfo';

const ProductCard = props => {
  const {
    noActionFooter,
    noOverlayLink,
    additionalClasses,
    product: {
      name, pictures, discount, price
    },
    onQuickViewOpenHandler
  } = props;
  const onQuickViewClickHandler = e => {
    e.preventDefault();
    onQuickViewOpenHandler();
  };

  let productImage = (
    <figure className="image product-card__figure ">
      <img className="product-card__image" src={pictures[0]} alt="product" />
      <div className=" is-overlay product-card__figure-overlay">
        <div className="product-card__overlay-actions">
          <button
            className="button is-primary is-inverted product-card__figure-overlay-button"
            onClick={e => onQuickViewClickHandler(e)}
          >
            <Icon icon={eye} />
          </button>
        </div>
      </div>
      {discount !== 0 ? <DiscountInfo discount={discount} /> : null}
    </figure>
  );
  if (noOverlayLink) {
    productImage = (
      <figure className="image product-card__figure ">
        <img className="product-card__image" src={pictures[0]} alt="product" />
        <div className=" is-overlay product-card__figure-overlay">
          <div className="product-card__overlay-actions">
            <label
              className="button is-primary is-inverted product-card__figure-overlay-button"
            >
              <Icon icon={circleRight} />
            </label>
          </div>
        </div>
        {discount !== 0 ? <DiscountInfo discount={discount} /> : null}
      </figure>
    );
  }

  return (
    <div className={`card product-card ${additionalClasses}`}>
      <div className="card-image product-card__image-holder">
        {productImage}
      </div>
      <div className="card-content product-card__info">
        <header>
          <label
            className="title is-size-5 product-card__name has-text-centered"
          >
            {name}
          </label>
        </header>
        <div className="columns is-centered">
          <div className="column is-4-touch is-4 has-text-centered has-text-danger has-text-weight-semibold product-card__price">
            {price.toFixed(2)} ₽
          </div>
        </div>
      </div>
      {noActionFooter || (
        <footer className="product-card__actions">

        </footer>
      )}
    </div>
  );
};

export default ProductCard;
