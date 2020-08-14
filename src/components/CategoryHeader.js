import React from 'react';

import './CategoryHeader.css';
import categoryNames from '../db/categories';

const CategoryHeader = props => {
  const { title } = props;
  // todo
  return (
    <header className='category-header'>
      <h2 className='title is-size-3 has-text-secondary has-text-weight-normal category-title is-family-primary has-text-white'>
        Товары в категории <span className='category-name'>{ !title ? '' : categoryNames[title].name}</span>
      </h2>
    </header>
  );
};

export default CategoryHeader;
