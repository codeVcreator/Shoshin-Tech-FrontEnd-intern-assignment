import React from "react";
import List from "../Components/List";
import Card from "../Components/Card";

const Dashboard = () => {
  const stats = [
    { title: "Available Position", value: 24, change: "4 Urgently needed" },
    { title: "Job Open", value: 10, change: "4 Active hiring" },
    { title: "New Employees", value: 24, change: "4 Departments" },
  ];

  const announcements = [
    "Outing schedule for every department",
    "Meeting HR Department",
    "IT Department needs two more talents for UX/UI Designer position",
  ];

  const schedules = [
    "Review candidate applications - Today 11:30 AM",
    "Interview with candidates - Today 10:30 AM",
    "Short meeting with IT Department - Today 09:15 AM",
  ];

//--------------------------------------------------------------------------------------------

  return (
    <div
      style={{
        marginTop: "91px",
        marginLeft: "242px",
      }}
    >
      <div className="dashboard">
        <div className="stats-section">
          {stats.map((stat, index) => (
            <Card
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
            />
          ))}
        </div>
        <div className="list-section">
          <List title="Announcements" items={announcements} />
          <List title="Upcoming Schedule" items={schedules} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
