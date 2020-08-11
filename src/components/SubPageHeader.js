import React from 'react';

import './SubPageHeader.css';

const SubPageHeader = props => {
  const { title, subtitle } = props;

  return (
    <header className="subpage-header">
      <h2 className="title has-text-weight-normal is-size-3 is-capitalized has-text-secondary subpage-header__title">
        {title}
      </h2>
      <h3 className="subtitle is-size-5 subpage-header__subtitle">{subtitle}</h3>
    </header>
  );
};

export default SubPageHeader;
