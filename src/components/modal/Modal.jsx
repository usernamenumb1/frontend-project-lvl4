import React from "react";
import AddChannel from "./AddChannel.jsx";
import RemoveChannel from "./RemoveChannel.jsx";
import RenameChannel from "./RenameChannel.jsx";

export default ({ type }) => {
  switch (type) {
    case 'ADD_CHANNEL':
      return <AddChannel />;
    case 'REMOVE_CHANNEL':
      return <RemoveChannel />;
    case 'RENAME_CHANNEL':
      return <RenameChannel />;
    case 'NONE':
      return null;
    default:
      throw new Error('Unknown type!');
  }
};
