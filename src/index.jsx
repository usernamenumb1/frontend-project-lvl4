// @ts-check

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from "./locales/index.js";
import store from './slices/index.js';
import App from './App.jsx';
import { AuthContextProvider } from './components/context/AuthProvider.jsx';
import { APIProvider } from './components/context/APIProvider.jsx';
import { updateMessages } from "./slices/messagesSlice.js";
import { updateChannels, removeChannel, renameChannel } from "./slices/channelsSlice.js";
import '../assets/application.scss';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const root = ReactDOM.createRoot(document.querySelector('#chat'));
const socket = io();
socket.on('connect', () => {
  console.log('connected');
});
socket.on("newMessage", (message) => {
  store.dispatch(updateMessages(message));
});
socket.on("newChannel", (channel) => {
  store.dispatch(updateChannels(channel));
});
socket.on("removeChannel", ({ id }) => {
  store.dispatch(removeChannel(id));
});
socket.on("renameChannel", ({ id, name }) => {
  store.dispatch(renameChannel({ id, name }));
});
const i18n = i18next.createInstance();
i18n.use(initReactI18next).init({
  lng: 'ru',
  debug: true,
  resources,
}).then(() => {
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
});
