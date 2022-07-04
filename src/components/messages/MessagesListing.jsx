import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message.jsx";

export default () => {
  const messages = useSelector((store) => store.messagesStore.messages);
  const channels = useSelector((state) => state.channelsStore.channels);
  const currentChannelId = useSelector((store) => store.channelsStore.currentChannelId);
  const currentChannelName = channels.find((c) => c.id === currentChannelId);
  const filtredMessages = messages.filter((message) => message.channelId === currentChannelId);
  console.log(messages);
  return (
    <>
      <div className="bg-light mb-4 p-3 shadow-sm">
        <p className="m-0">
          <b>{`${currentChannelName.name}`}</b>
        </p>
        <span className="text-muted">{`${filtredMessages.length} messages`}</span>
      </div>
      <div id="messages-box" className="chat-messages overflow-auto px-5">
        {filtredMessages.map((item) => <Message key={item.id} username={item.username} body={item.body} />)}
      </div>
    </>
  );
};
