import styled from 'styled-components';

export const DetailStoryBlock = styled.article`
  padding: 20px 0;
`;

export const StoryHeader = styled.header`
  padding: 20px 0;
`;

export const StoryTitle = styled.h2`
  font-size: 20px;
  letter-spacing: 0.04em;
  line-height: 1.4em;
`;

export const StoryText = styled.p`
  padding: 20px 0;
`;

export const StoryComment = styled.div``;

export const Comment = styled.section`
  padding: 20px 0;
  background: #282828;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
