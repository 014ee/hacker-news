import React from 'react';
import { IconComment } from '../../Assets/Icons';

import { Link } from 'react-router-dom';
import Sitemap from '../../Utils/Sitemap';

const InfoComment = ({ id, kids }) => {
  return (
    <Link to={`${Sitemap.detail.path}${id}`}>
      <IconComment /> {kids.length}
    </Link>
  );
};

InfoComment.defaultProps = {
  kids: [],
};

export default InfoComment;
