import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getStory, getStoryIds } from "utils/getApi";
import queryOptions from "settings/queryOptions";
import formatDate from "utils/formatDate";
import Title from "./Title";
import CardSlide from "./CardSlide";
import StoryItem from "./StoryItem";
import { NetworkError, Loading } from "components/State";

function BestStoryList({ queryKey, dateList }) {
  const [activedDate, setActivedDate] = useState(dateList[0]);
  const { isLoading, isError, data } = useQuery(
    [queryKey],
    () =>
      getStoryIds(queryKey).then((ids) =>
        Promise.all(ids.slice(0, 50).map((id) => getStory(id)))
      ),
    {
      ...queryOptions,
      select: (data) =>
        data.filter((story) => formatDate(story.created) === activedDate),
    }
  );
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NetworkError />;
  }

  const handleActivedDate = (index) => {
    setActivedDate(dateList[index]);
  };

  return (
    <main>
      <Title title={activedDate} />
      <CardSlide
        data={data.length > 0 && data[0]}
        dateList={dateList}
        setActivedDate={handleActivedDate}
      />

      {data.length > 0 &&
        data
          .slice(1, 5)
          .map((story, index) => (
            <StoryItem data={story} key={story.id} index={index} />
          ))}
    </main>
  );
}

export default BestStoryList;
