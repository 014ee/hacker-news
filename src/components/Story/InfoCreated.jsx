import React from "react";

import formatCreated from "utils/formatCreated";
import { IconCreated } from "assets/Icons";

const InfoCreated = ({ created = new Date() }) => {
  return (
    <span>
      <IconCreated /> {formatCreated(created)} ago
    </span>
  );
};

export default InfoCreated;
