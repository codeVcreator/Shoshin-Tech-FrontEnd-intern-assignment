import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar flex-start">
      <div className="logo" style={{marginBottom: "39px"}}>
        <img src="./images/sidebar/logo.png" alt="logo" />
      </div>

      <div className="main-menu flex" style={{ flexDirection: "column" }}>
        <div>
          <p className="sidebar-header">MAIN MENU</p>
        </div>
        <div
          className="main-menu-options flex-start"
          style={{ flexDirection: "column", alignItems: "start" }}
        >
          <div className="main-menu-option flex">
            <img src="./images/sidebar/ic_dashboard.png" alt="" />
            <p style={{ color: "#FF5151", fontWeight: "500" }}>Dashboard</p>
          </div>
          <div className="main-menu-option flex">
            <img src="./images/sidebar/ic_recruitment.png" alt="" />
            <p>Recruitment</p>
          </div>
          <div className="main-menu-option flex">
            <img src="./images/sidebar/ic_calendar.png" alt="" />
            <p>Schedule</p>
          </div>
          <div className="main-menu-option flex">
            <img src="./images/sidebar/ic_employee.png" alt="" />
            <p>Employee</p>
          </div>
          <div className="main-menu-option flex">
            <img src="./images/sidebar/ic_department.png" alt="" />
            <p>Department</p>
          </div>
        </div>
      </div>

      <div className="other flex" style={{ flexDirection: "column" }}>
        <div>
          <p className="sidebar-header">OTHER</p>
        </div>
        <div
          className="other-options flex-start"
          style={{ flexDirection: "column", alignItems: "start" }}
        >
          <div className="other-option flex">
            <img src="./images/sidebar/ic_support.png" alt="" />
            <p>Support</p>
          </div>
          <div className="other-option flex">
            <img src="./images/sidebar/ic_settings.png" alt="" />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
