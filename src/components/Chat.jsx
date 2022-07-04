import React, { useEffect, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { AuthContext } from './context/AuthProvider.jsx';
import { addMessage } from '../slices/messagesSlice.js';
import { addChannel, setId } from '../slices/channelsSlice.js';
import MessagesListing from './messages/MessagesListing.jsx';
import MessagesSending from './messages/MassagesSending.jsx';
import ChannelsList from './channels/ChannelsList.jsx';

export default () => {
  const dispatch = useDispatch();
  const { isAuthorised } = useContext(AuthContext);
  const [loaded, setLoaded] = useState(false);

  const getReq = () => {
    axios.get('/api/v1/data', { headers: { Authorization: `Bearer ${isAuthorised}` } })
      .then(({ data: { channels, messages, currentChannelId } }) => {
        dispatch(addMessage(messages));
        dispatch(addChannel(channels));
        dispatch(setId(currentChannelId));
        setLoaded(true);
      });
  };
  useEffect(() => {
    getReq();
  }, []);

  if (loaded === false) {
    return (
      <div className="row d-flex justify-content-center align-items-center h-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div className="container h-100 my-4 shadow rounded">
      <div className="row bg-white h-100 flex-md-row">
        <ChannelsList />
        <div className="col h-100 p-0">
          <div className="d-flex flex-column h-100">
            <MessagesListing />
            <MessagesSending />
          </div>
        </div>
      </div>
    </div>
  );
};
