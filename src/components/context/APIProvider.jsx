import React, { createContext, useState } from "react";

export const apiContext = createContext();

export const APIProvider = ({ children, socket }) => {
  const [state, setState] = useState('pending');
  const promisedEmit = (emitFunc) => (data) => new Promise((resolve, reject) => {
    // let state = 'pending';
    // setState('pending');
    const timer = setTimeout(() => {
      // state = 'rejected';
      setState('rejected');
      reject(new Error('something goes wrong'));
    }, 3000);
    console.log(state);
    if (state !== 'pending') return;
    emitFunc(data, (response) => {
      clearTimeout(timer);
      if (state !== 'pending') return;
      console.log(state);
      if (response.status === 'ok') {
        // state = 'resolved';
        setState('pending');
        resolve(response);
      } else {
        setState('rejected');
        reject(new Error('not ok'));
      }
      // state = 'rejected';
    });
  }).then((response) => console.log(response));
  const socketAPI = {
    sendMessage: promisedEmit((...arg) => socket.volatile.emit('newMessage', ...arg)),
    addNewChannel: promisedEmit((...arg) => socket.volatile.emit('newChannel', ...arg)),
    removeChannel: promisedEmit((...arg) => socket.volatile.emit('removeChannel', ...arg)),
    renameChannel: promisedEmit((...arg) => socket.volatile.emit('renameChannel', ...arg)),
  };
  return (
    <apiContext.Provider value={socketAPI}>
      {children}
    </apiContext.Provider>
  );
};
