import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiPlus } from 'react-icons/bi';
import Channel from "./Channel.jsx";
import { setIsOpen } from "../../slices/modalSlice.js";

export default () => {
  const channels = useSelector((state) => state.channelsStore.channels);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setIsOpen({ isOpen: true, type: 'ADD_CHANNEL' }));
  };
  return (
    <div className="col-4  col-md-2 border-end pt-5 px-0 bg-antiqueLight">
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
        <span>Channels</span>
        <button
          type="button"
          className="btn btn-group-vertical maroon p-0 me-2"
          onClick={handleClick}
        >
          <BiPlus size="20" />
        </button>
      </div>
      <ul className="nav flex-column nav-pills nav-fill px-2">
        {channels.map((channel) => (
          <li key={channel.id} className="nav-item w-100">
            <Channel channel={channel} />
          </li>
        ))}
      </ul>
    </div>
  );
};
