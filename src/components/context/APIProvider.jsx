import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { updateMessages } from "../../slices/messagesSlice.js";
import { updateChannels } from "../../slices/channelsSlice.js";

export const apiContext = createContext();

export const APIProvider = ({ children, socket }) => {
  const dispatch = useDispatch();
  const sendMessage = (mess) => socket.emit('newMessage', mess, (ack) => console.log(ack.status));
  const addNewChannel = (channel) => socket.emit('newChannel', channel);
  socket.on("newMessage", (message) => {
    dispatch(updateMessages(message));
    console.log(message);
  });
  socket.on("newChannel", (channel) => {
    dispatch(updateChannels(channel));
    console.log(channel);
  });
  return (
    <apiContext.Provider value={{ addNewChannel, sendMessage, socket }}>
      {children}
    </apiContext.Provider>
  );
};
