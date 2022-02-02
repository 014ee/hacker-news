import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topstoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;
export const userUrl = `${baseUrl}user/`;
export const json = '.json?print=pretty';

export const getStoryIds = async (type) => {
  const response = await axios.get(`${baseUrl}${type}stories${json}`);
  return response.data;
};

export const getStory = async (storyId) => {
  const response = await axios.get(`${storyUrl + storyId}.json`);
  return response.data ? ApiFields(response.data) : null;
};

export const getUser = async (storyBy) => {
  const response = await axios.get(`${userUrl + storyBy}.json`);
  return response.data ? userFields(response.data) : null;
};

export const ApiFields = ({
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
} = {}) => ({
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
});

export const userFields = ({ id, created, karma, about, submitted } = {}) => ({
  id,
  created,
  karma,
  about,
  submitted,
});
