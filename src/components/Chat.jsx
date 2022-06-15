import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  const messagesFromState = useSelector((state) => state.messagesStore.messages);

  const getReq = () => {
    axios.get('/api/v1/data', { headers: { Authorization: `Bearer ${isAuthorised}` } })
      // .then((data) => console.log(data))
      .then(({ data: { channels, messages, currentChannelId } }) => {
        console.log(channels);
        console.log(currentChannelId);
        console.log(messages);
        dispatch(addMessage(messages));
        dispatch(addChannel(channels));
        dispatch(setId(currentChannelId));
      });
  };
  useEffect(() => {
    getReq();
  }, []);
  return (
    <div className="container h-100 my-4 shadow rounded">
      <div className="row bg-white h-100 flex-md-row">
        <div className="col-4  col-md-2 border-end pt-5 px-0 bg-light">
          <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
            <span>Channels</span>
            <button type="button" className="btn btn-group-vertical text-primary p-0">
              <span>+</span>
            </button>
          </div>
          <ChannelsList />
        </div>
        <div className="col h-100 p-0">
          <div className="d-flex flex-column h-100">
            <div className="bg-light mb-4 p-3 shadow-sm">
              <p className="m-0">
                <b>General</b>
              </p>
              <span className="text-muted">{`${messagesFromState.length} messages`}</span>
            </div>
            <MessagesListing />
            <MessagesSending />
          </div>
        </div>
      </div>
    </div>
  );
};
