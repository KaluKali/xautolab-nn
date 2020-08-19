import React from 'react';
import { Link } from 'react-router-dom';

import './ProductPreview.css';

const ProductPreview = props => {
  const {
    product: {
      _id,
      name,
      price,
      pictures,
    },
  } = props;

  return (
    <div className="columns level">
      <div className="column is-5">
        <div className="product-preview-modal__image-holder">
          <img className="product-preview-modal__image" src={pictures[0]} alt="" />
        </div>
      </div>
      <div className="column is-7">
        <header className="product-preview-modal__product-header">
          <Link to={`/product/${_id}`}>
            <h2 className="title">{name}</h2>
          </Link>
        </header>
        <span className="is-block has-text-danger is-size-5-touch is-size-4-desktop has-text-weight-semibold product-preview-modal__product-price">
          {`${price} ₽`}
        </span>

      </div>
    </div>
  );
};

export default ProductPreview;
