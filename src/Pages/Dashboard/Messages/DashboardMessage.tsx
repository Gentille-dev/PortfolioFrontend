import React, { useEffect, useState } from "react";
import { Message } from "../Messages/AdminContext";
import { getMessages } from "./api";

interface MessageTableProps {
  messages: Message[];
}

const MessageTable: React.FC<MessageTableProps> = ({ messages }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [fetchedMessages, setFetchedMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const fetchedMessages = await getMessages();
        setFetchedMessages(fetchedMessages);
        setLoading(false);
      } catch (error) {
        setError("Error fetching messages");
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 className="messages">Messages</h1>
      <table id="messageTable">
        <thead>
          <tr className="tr-head">
            <th>Fullname</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {fetchedMessages.map((message, index) => (
            <tr className="tdd" key={index}>
              <td>{message.fullname}</td>
              <td>{message.email}</td>
              <td>{message.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MessageTable;
