import React from "react";
import { Link } from "react-router-dom";

import { IconReply } from "assets/Icons";
import sitemap from "settings/sitemap";

const InfoReply = ({ id, kids = [] }) => {
  return (
    <Link to={`${sitemap.detail.path}${id}`}>
      <IconReply /> {kids.length}
    </Link>
  );
};

export default InfoReply;
