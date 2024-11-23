import React from "react";

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="announcement-content">
        <div className="announcement-header">
          <p>Announcement</p>
          <div className="header-date">
            <p>Today, 20 Nov 2024</p>
            <img src="../images/dashboard/vector-1.png" alt="vector-1" />
          </div>
        </div>

        <div className="rows">
          <div className="row-1">
            <div className="row-text">
              <p>Outing schedule for every department</p>
              <span>5 minutes ago</span>
            </div>
            <div className="row-images">
              <img
                src="../images/dashboard/bi_pin-angle-fill-dark.png"
                alt="pin"
              />
              <img
                src="../images/dashboard/carbon_overflow-menu-horizontal.png"
                alt="3-dots"
              />
            </div>
          </div>
          <div className="row-2">
            <div className="row-text">
              <p>Meeting HR Department</p>
              <span>Yesterday, 12:30 PM</span>
            </div>
            <div className="row-images">
              <img src="../images/dashboard/bi_pin-angle-fill.png" alt="pin" />
              <img
                src="../images/dashboard/carbon_overflow-menu-horizontal.png"
                alt="3-dots"
              />
            </div>
          </div>
          <div className="row-3">
            <div className="row-text">
              <p>
                IT Department need two more talents for UI/UX Designer position
              </p>
              <span>Yesterday, 09:15 AM</span>
            </div>
            <div className="row-images">
              <img src="../images/dashboard/bi_pin-angle-fill.png" alt="pin" />
              <img
                src="../images/dashboard/carbon_overflow-menu-horizontal.png"
                alt="3-dots"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="announcement-footer">
        <p>See All Announcement</p>
      </div>
    </div>
  );
};

export default Announcement;
