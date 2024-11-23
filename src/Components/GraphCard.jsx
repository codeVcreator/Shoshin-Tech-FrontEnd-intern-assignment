import React from "react";

const GraphCard = ({ className, title, value, men, women, percentage }) => {
  return (
    <div className={`graphCard ${className}`}>
      <div className="left-side">
        <div>
          <h3 className="graphCard-title" style={{marginBottom: "15px"}}>{title}</h3>
          <p className="graphCard-value">{value}</p>
        </div>
        <div style={{ gap: "4px" }}>
          <p className="graphCard-men">{men} Men</p>
          <p className="graphCard-women">{women} Women</p>
        </div>
      </div>

      <div className="right-side">
        <img
          src={`../images/dashboard/${percentage}-percent.png`}
          alt={`${percentage}-percent`}
        />
        <p className="graphCard-percentage">+{percentage}% Past month</p>
      </div>
    </div>
  );
};

export default GraphCard;
