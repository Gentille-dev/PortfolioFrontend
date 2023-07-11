import React from "react";
import MiddleSection from "../MiddleSection";
import TopSection from "../TopSection";
import MessageTable from "./DashboardMessage";

const Dashboard: React.FC = () => {
  const messageData = [
    {
      fullname: "Gentille Ernestine",
      email: "genny@example.com",
      message: "Hallo, Guten Morgen.",
    },
  ];

  return (
    <>
      <TopSection />
      <div className="admin-wrapper">
        <MiddleSection />
        <MessageTable messages={messageData} />
      </div>
    </>
  );
};

export default Dashboard;
