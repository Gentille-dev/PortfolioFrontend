import React from "react";

export interface Message {
  fullname: string;
  email: string;
  message: string;
}

interface AdminContentProps {
  messages: Message[];
}

const AdminContent: React.FC<AdminContentProps> = ({ messages }) => {
  return (
    <div className="admin-content">
      <h1>Message</h1>
    </div>
  );
};

export default AdminContent;
