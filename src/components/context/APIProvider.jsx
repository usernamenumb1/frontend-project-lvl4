import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { updateMessages } from "../../slices/messagesSlice.js";
import { updateChannels, removeChannel } from "../../slices/channelsSlice.js";

export const apiContext = createContext();

export const APIProvider = ({ children, socket }) => {
  const dispatch = useDispatch();
  const emitSendMessage = (mess) => socket.emit('newMessage', mess, (ack) => console.log(ack.status));
  const emitAddNewChannel = (channel) => socket.emit('newChannel', channel);
  const emitRemoveChannel = (id) => socket.emit('removeChannel', id);
  socket.on("newMessage", (message) => {
    dispatch(updateMessages(message));
    console.log(message);
  });
  socket.on("newChannel", (channel) => {
    dispatch(updateChannels(channel));
    console.log(channel);
  });
  socket.on("removeChannel", ({ id }) => {
    dispatch(removeChannel(id));
    console.log(id);
  });
  return (
    <apiContext.Provider value={{
      emitRemoveChannel, emitAddNewChannel, emitSendMessage, socket,
    }}
    >
      {children}
    </apiContext.Provider>
  );
};
