import React from "react";

import formatCreated from "utils/formatCreated";
import { IconCreated } from "assets/icons";

const InfoCreated = ({ created = new Date() }) => {
  return (
    <span>
      <IconCreated /> {formatCreated(created)} ago
    </span>
  );
};

export default InfoCreated;
