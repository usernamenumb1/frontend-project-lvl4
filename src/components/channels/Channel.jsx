import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from 'classnames';
import { GrChannel } from 'react-icons/gr';
import { BsChevronDown } from "react-icons/bs";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import { setId } from "../../slices/channelsSlice.js";

export default ({ channel: { name, id, removable } }) => {
  const currentChannelId = useSelector((state) => state.channelsStore.currentChannelId);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setId(id));
  };
  if (removable) {
    return (
      <Dropdown as={ButtonGroup} className="d-flex mb-1">
        <Button
          variant={cn('felx-grow-0 w-100 text-start btn', { 'btn-cadetblue-nohover': id === currentChannelId, 'btn-nocolor': id !== currentChannelId })}
          onClick={handleClick}
        >
          <GrChannel className="me-2 mb-1 d-none d-xl-inline" />
          {name}
        </Button>

        <Dropdown.Toggle split variant={cn('btn p-1 p-xl-2', { 'btn-cadetblue': id === currentChannelId, 'btn-nocolor': id !== currentChannelId })} id="dropdown-split-basic">
          <BsChevronDown />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Delete</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Rename</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  return (
    <button
      type="button"
      className={cn('w-100 rounded-1 text-start btn mb-1', { 'btn-cadetblue': id === currentChannelId, 'btn-nocolor': id !== currentChannelId })}
      onClick={handleClick}
    >
      <GrChannel className="me-2 mb-1 d-none d-xl-inline" />
      {name}
    </button>
  );
};
