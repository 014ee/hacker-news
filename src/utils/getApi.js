import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const storyUrl = `${baseUrl}item/`;
export const userUrl = `${baseUrl}user/`;

export const getStoryIds = async (queryKey) => {
  try {
    const response = await axios.get(`${baseUrl}${queryKey}stories.json`);
    return response.data;
  } catch (error) {
    console.log(error, `queryKey: ${queryKey} 데이터를 불러오지 못했습니다.`);
  }
};

export const getStory = async (storyId) => {
  try {
    const response = await axios.get(`${storyUrl}${storyId}.json`);
    return response.data ? storyFields(response.data) : null;
  } catch (error) {
    console.log(error, `storyId: ${storyId} 데이터를 불러오지 못했습니다.`);
  }
};

export const getUser = async (storyBy) => {
  try {
    const response = await axios.get(`${userUrl}${storyBy}.json`);
    return response.data ? userFields(response.data) : null;
  } catch (error) {
    console.log(error, `storyBy: ${storyBy} 데이터를 불러오지 못했습니다.`);
  }
};

const storyFields = ({
  id,
  type,
  by,
  time,
  url,
  title,
  text,
  score,
  descendants,
  kids,
}) => ({
  id,
  type,
  by,
  created: time * 1000,
  url,
  title,
  text,
  score,
  descendants,
  kids,
});

const userFields = ({ id, created, karma, about, submitted }) => ({
  id,
  created: created * 1000,
  karma,
  about,
  submitted,
});
