import React from 'react';

const Card = ({ className, title, value, change }) => {
  return (
    <div className={`card ${className}`}>
      <h3 className="card-title">{title}</h3>
      <p className="card-value">{value}</p>
      {change && <span className="card-change">{change}</span>}
    </div>
  );
};

export default Card;
