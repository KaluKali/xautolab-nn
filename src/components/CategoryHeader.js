import React from 'react';

import './CategoryHeader.css';

const CategoryHeader = props => {
  const { title } = props;
  const category_name = {
    dvc: 'Ремонт ДВС',
    mkppakpp: 'Ремонт АКПП/МКПП',
    profdiag: 'Профессиональная диагностика',
    autoelect: 'Автоэлектрика',
    texobs: 'Техническое обслуживание',
    slesrem: 'Слесарный ремонт',
    remtormsys: 'Ремонт тормозной системы',
    remtoplsys: 'Ремонт топливной системы'
  };
  return (
    <header className='category-header'>
      <h2 className='title is-size-3 has-text-secondary has-text-weight-normal category-title is-family-primary'>
        Товары в категории <span className='has-text-weight-bold category-name'>{category_name[title]}</span>.
      </h2>
    </header>
  );
};

export default CategoryHeader;
