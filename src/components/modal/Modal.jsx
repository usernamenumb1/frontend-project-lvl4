import React from "react";
import AddChannel from "./AddChannel.jsx";

export default ({ type }) => {
  switch (type) {
    case 'ADD_CHANNEL':
      return <AddChannel />;
    case 'NONE':
      return null;
    default:
      throw new Error('Unknown type!');
  }
};
