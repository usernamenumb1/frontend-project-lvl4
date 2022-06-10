import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import cn from 'classnames';
import { GrChannel } from 'react-icons/gr';
import { AuthContext } from './context/AuthProvider.jsx';
import { addMessage } from '../slices/messagesSlice.js';
import { addChanel, setId } from '../slices/chanelsSlice.js';
import MessagesListing from './messages/MessagesListing.jsx';
import MessagesSending from './messages/MassagesSending.jsx';

export default () => {
  const dispatch = useDispatch();
  const { isAuthorised } = useContext(AuthContext);
  const channelsFromState = useSelector((state) => state.chanelsStore.chanels);
  const messagesFromState = useSelector((state) => state.messagesStore.messages);
  const currentChannelIdFromState = useSelector((state) => state.chanelsStore.currentChannelId);

  const getReq = () => {
    axios.get('/api/v1/data', { headers: { Authorization: `Bearer ${isAuthorised}` } })
      // .then((data) => console.log(data))
      .then(({ data: { channels, messages, currentChannelId } }) => {
        console.log(channels);
        console.log(currentChannelId);
        console.log(messages);
        dispatch(addMessage(messages));
        dispatch(addChanel(channels));
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
          <ul className="nav flex-column nav-pills nav-fill px-2">
            {channelsFromState.map((chan) => (
              <li key={chan.id} className="nav-item w-100">
                <button type="button" className={cn('w-100 rounded-1 text-start btn', { 'btn-secondary': chan.id === currentChannelIdFromState })}>
                  <GrChannel className="me-2 mb-1" />
                  {chan.name}
                </button>
              </li>
            ))}
          </ul>
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
