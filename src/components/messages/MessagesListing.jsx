import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message.jsx";

export default () => {
  const messages = useSelector((store) => store.messagesStore.messages);
  return (
    <div id="messages-box" className="chat-messages overflow-auto px-5">
      {messages.map((item) => <Message key={item.id} username={item.username} body={item.body} />)}
    </div>
  );
};
