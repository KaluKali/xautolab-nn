import React from 'react';

import './DiscountInfo.css';

const DiscountInfo = props => {
  const { discount } = props;
  return (
    <div className="discount-info has-background-danger has-text-white is-uppercase has-text-weight-bold">{`- ${discount}%`}</div>
  );
};

export default DiscountInfo;
