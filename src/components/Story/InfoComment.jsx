import React from "react";
import { Link } from "react-router-dom";

import { IconComment } from "assets/icons";
import sitemap from "settings/sitemap";

const InfoComment = ({ id, comments = [] }) => {
  return (
    <Link to={`${sitemap.detail.path}${id}`}>
      <IconComment /> {comments.length}
    </Link>
  );
};

export default InfoComment;
