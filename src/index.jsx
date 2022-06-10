// @ts-check

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client';
import store from './slices/index.js';
import App from './App.jsx';
import { AuthContextProvider } from './components/context/AuthProvider.jsx';
import { APIProvider } from './components/context/APIProvider.jsx';

import '../assets/application.scss';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const root = ReactDOM.createRoot(document.querySelector('#chat'));
const socket = io();
// socket.emit('newMessage', (mess) => {
//   console.log(mess);
// });
socket.on('connect', () => {
  console.log('connected');
});
console.log(socket);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <APIProvider socket={socket}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </APIProvider>
    </Provider>
  </BrowserRouter>,
);
