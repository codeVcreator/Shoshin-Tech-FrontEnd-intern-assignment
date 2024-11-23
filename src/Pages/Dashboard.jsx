import React from "react";
import Card from "../Components/Card";
import GraphCard from "../Components/GraphCard";
import Announcement from "../Components/Announcement";
import Activity from "../Components/Activity";
import Schedule from "../Components/Schedule";

const Dashboard = () => {
  const stats = [
    {
      class: "position",
      title: "Available Position",
      value: 24,
      change: "4 Urgently needed",
    },
    { class: "job", title: "Job Open", value: 10, change: "4 Active hiring" },
    {
      class: "employees",
      title: "New Employees",
      value: 24,
      change: "4 Departments",
    },
  ];

  const graphStats = [
    {
      class: "employee",
      title: "Total Employees",
      value: 216,
      men: "120",
      women: "96",
      percentage: "2",
    },
    {
      class: "talent",
      title: "Talent Request",
      value: 16,
      men: "6",
      wonmen: "10",
      percentage: "5",
    },
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
        <h3 className="title">Dashboard</h3>

        <div className="dashboard-content">
          <div className="left-part">
            <div className="stats-section">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className={stat.class}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                />
              ))}
            </div>

            <div className="graph-stats-section">
              {graphStats.map((graphStat, index) => (
                <GraphCard
                  key={index}
                  className={graphStat.class}
                  title={graphStat.title}
                  value={graphStat.value}
                  men={graphStat.men}
                  women={graphStat.women}
                  percentage={graphStat.percentage}
                />
              ))}
            </div>

            <div className="announcement-section">
              <Announcement />
            </div>
          </div>

          <div className="right-part">
            <div className="recent-activity">
              <Activity />
            </div>

            <div className="upcoming-schedule">
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
