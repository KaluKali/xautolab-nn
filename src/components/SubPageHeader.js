import React from 'react';

import './SubPageHeader.css';

const SubPageHeader = props => {
  const { title, subtitle } = props;

  return (
    <header className="subpage-header">
      <h2 className="title has-text-weight-normal is-size-3 is-capitalized has-text-secondary subpage-header__title has-text-white">
        {title}
      </h2>
      <h3 className="subtitle is-size-5 subpage-header__subtitle has-text-white">{subtitle}</h3>
    </header>
  );
};

export default SubPageHeader;
