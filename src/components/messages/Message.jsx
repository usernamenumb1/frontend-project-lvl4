import React from "react";

export default ({ username, body }) => (
  <div className="text-break mb-2">
    <div>
      <b>{username}</b>
      :
      {` ${body}`}
    </div>
  </div>
);
