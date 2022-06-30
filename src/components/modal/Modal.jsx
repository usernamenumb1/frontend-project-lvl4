import React from "react";
import AddChannel from "./AddChannel.jsx";
import RemoveChannel from "./RemoveChannel.jsx";

export default ({ type }) => {
  switch (type) {
    case 'ADD_CHANNEL':
      return <AddChannel />;
    case 'REMOVE_CHANNEL':
      return <RemoveChannel />;
    case 'NONE':
      return null;
    default:
      throw new Error('Unknown type!');
  }
};
