import React from "react";
import { useParams } from "react-router-dom";

import { HeaderDetail } from "components/Header";
import { DetailStory } from "components/Story";

const Detail = function () {
  const params = useParams();

  return (
    <>
      <HeaderDetail title="Comments" />
      <DetailStory storyId={params.id} />
    </>
  );
};

export default Detail;
