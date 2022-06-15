import React from "react";
import { useSelector } from "react-redux";
import Channel from "./Channel.jsx";

export default () => {
  const channels = useSelector((state) => state.channelsStore.channels);
  return (
    <ul className="nav flex-column nav-pills nav-fill px-2">
      {channels.map((channel) => (
        <li key={channel.id} className="nav-item w-100">
          <Channel channel={channel} />
        </li>
      ))}
    </ul>
  );
};
