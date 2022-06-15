import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from 'classnames';
import { GrChannel } from 'react-icons/gr';
import { setId } from "../../slices/channelsSlice.js";

export default ({ channel: { name, id } }) => {
  const currentChannelId = useSelector((state) => state.channelsStore.currentChannelId);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setId(id));
  };
  return (
    <button
      type="button"
      className={cn('w-100 rounded-1 text-start btn', { 'btn-secondary': id === currentChannelId })}
      onClick={handleClick}
    >
      <GrChannel className="me-2 mb-1" />
      {name}
    </button>
  );
};
