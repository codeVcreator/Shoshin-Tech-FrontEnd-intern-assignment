import React from "react";

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="schedule-content">
        <div className="schedule-header">
          <p>Upcoming Schedule</p>
          <div className="header-date">
            <p>Today, 20 Nov 2024</p>
            <img src="../images/dashboard/vector-1.png" alt="vector-1" />
          </div>
        </div>

        <div className="rows">
          <div className="row-heading">
            <small>Priority</small>
          </div>
          <div className="row-1">
            <div className="row-text">
              <p>Review candidate applications</p>
              <span>Today - 11.30 AM</span>
            </div>
            <div className="row-images">
              <img src="../images/dashboard/ic-notifications.png" alt="pin" />
              <img
                src="../images/dashboard/carbon_overflow-menu-horizontal.png"
                alt="3-dots"
              />
            </div>
          </div>
          <div className="row-heading">
            <small>Other</small>
          </div>
          <div className="row-2">
            <div className="row-text">
              <p>Interview with candidates</p>
              <span>Today - 10.30 AM</span>
            </div>
            <div className="row-images">
              <img src="../images/dashboard/ic-notifications.png" alt="pin" />
              <img
                src="../images/dashboard/carbon_overflow-menu-horizontal.png"
                alt="3-dots"
              />
            </div>
          </div>
          <div className="row-3">
            <div className="row-text">
              <p>Short meeting with product designer from IT Departement</p>
              <span>Today - 09.15 AM</span>
            </div>
            <div className="row-images">
              <img src="../images/dashboard/ic-notifications.png" alt="pin" />
              <img
                src="../images/dashboard/carbon_overflow-menu-horizontal.png"
                alt="3-dots"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="schedule-footer">
        <p>Create a New Schedule</p>
      </div>
    </div>
  );
};

export default Schedule;
