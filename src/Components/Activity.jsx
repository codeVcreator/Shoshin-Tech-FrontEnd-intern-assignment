import React from "react";

const Activity = () => {
  return (
    <div className="activity-content">
      <div className="activity-header">
        <p>Recently Activity</p>
      </div>
      <div className="activity-body">
        <p
          style={{
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "10px",
            opacity: "60%",
            lineHeight: "11.72px",
          }}
        >
          10.40 AM, Fri 10 Sept 2021
        </p>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "28px",
          }}
        >
          You Posted a New Job
        </p>
        <p
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </div>
      <div className="activity-footer">
        <p>Today you makes 12 Activity</p>
        <button >
          <p>See All Activity</p>
        </button>
      </div>
    </div>
  );
};

export default Activity;
