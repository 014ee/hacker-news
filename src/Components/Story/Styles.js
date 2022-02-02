import styled from 'styled-components';

export const StoryListBlock = styled.section`
  display: block;
  margin-top: 20px;
  padding-bottom: 140px;
  min-height: 100vh;
`;

export const StorySubTitle = styled.h3`
  font-size: 20px;
`;

export const StoryBlock = styled.article`
  display:block;
  padding: 12px 0;
  margin: 12px 0;
  }
`;

export const StoryTitle = styled.h2`
  font-size: 16px;
  letter-spacing: 0.04em;
`;

export const StoryUrl = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  width: 60%;
  margin-bottom: 4px;
  white-space: nowrap;
  font-size: 12px;
  line-height: 1em;
`;
export const StoryInfo = styled.ul`
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: start;
  margin-top: 8px;
  white-space: nowrap;
`;
export const StoryInfoItem = styled.li`
  font-size: 12px;
  line-height: 1em;
  & + * {
    margin-left: 12px;
  }
  svg {
    margin-right: 4px;
    vertical-align: bottom;
  }
`;

export const StoryPoint = styled.div`
  display: flex;
  justiry-content: center;
  align-items: center;
  margin-top: 8px;
  progress {
    flex-grow: 1;
    height: 3px;
  }
`;

export const PointBar = styled.progress``;

export const PageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const PageItem = styled.li`
  margin: 0 8px;
`;
export const PageNumber = styled.span`
  display: inline-block;
  padding: 0.5em;
  cursor: pointer;
`;

export const StoryInfoBlock = styled.div``;
export const Button = styled.button``;
