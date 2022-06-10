import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { updateMessages } from "../../slices/messagesSlice";

export const apiContext = createContext();

export const APIProvider = ({ children, socket }) => {
  const dispatch = useDispatch();
  const sendMessage = (mess) => socket.emit('newMessage', mess, (ack) => console.log(ack.status));
  socket.on("newMessage", (message) => {
    dispatch(updateMessages(message));
    console.log(message);
  });
  return (
    <apiContext.Provider value={{ sendMessage, socket }}>
      {children}
    </apiContext.Provider>
  );
};
