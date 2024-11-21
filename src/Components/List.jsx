import React from 'react';

const List = ({ title, items }) => {
  return (
    <div className="list">
      <h3 className="list-title">{title}</h3>
      <ul className="list-items">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
