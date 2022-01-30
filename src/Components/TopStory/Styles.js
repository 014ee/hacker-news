import styled from 'styled-components';

export const SliderBlock = styled.div``;

export const StoryListBlock = styled.section`
  display: block;
  padding-bottom: 100px;
`;

export const StoryDate = styled.header`
  padding: 12px 0 4px;
  background: #232429;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.1em;

  & > div {
    display: flex;
    margin-top: 8px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;

    & > span {
      display: flex;
      justify-content: start;
      align-items: center;
      & > svg {
        margin-right: 6px;
      }
    }

    & > span:first-child {
      flex-grow: 1;
      text-align: left;
    }
  }
`;

export const StoryBlock = styled.article`
  display:block;
  padding: 12px 0;
  margin: 12px 0;
  background: #282828;

  & > div{
    max-width: 80%;
  }
  }
`;

export const StoryIndex = styled.span`
  position: absolute;
  left: -16px;
  display: inline-block;
`;

export const StoryTitle = styled.h2`
  font-size: 16px;
  letter-spacing: 0.04em;
`;

export const StoryUrl = styled.a`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
`;
export const StoryInfo = styled.ul`
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: start;
  margin-top: 8px;
`;
export const StoryInfoItem = styled.li`
  font-size: 12px;
  line-height: 1em;
  & + * {
    margin-left: 12px;
  }
  svg {
    margin-right: 2px;
    vertical-align: middle;
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

export const Button = styled.button``;
