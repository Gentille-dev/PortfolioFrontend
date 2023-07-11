import React from "react";
import LeftSection from "../Sidebar";
import TopSection from "../TopSection";
import MessageTable from "./DashboardMessage";
import { Message } from "../Messages/AdminContext";

interface MessagePageProps {
  messages: Message[];
}

const MessagePage: React.FC<MessagePageProps> = ({ messages }) => {
  return (
    <>
      <TopSection />

      <div className="app">
        <LeftSection />
        <div className="right-section">
          <MessageTable messages={messages} />
        </div>
      </div>
    </>
  );
};

export default MessagePage;
