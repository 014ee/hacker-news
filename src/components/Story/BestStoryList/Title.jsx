import styled from "styled-components";

import { Container } from "components/Ui";
import { IconBadge, IconCreated } from "assets/icons";

const Title = ({ title }) => {
  return (
    <StoryDate>
      <strong>{title}</strong>
      <Container>
        <span>
          <IconBadge />
          랭킹 1~5위 기사
        </span>
        <span>
          <IconCreated />
          매일 6시 업데이트
        </span>
      </Container>
    </StoryDate>
  );
};

export default Title;

const StoryDate = styled.header`
  padding: 1em 0 0.5em;
  background-color: ${(props) => props.theme.dateTitleColor};
  font-size: 16px;
  font-weight: 800;
  text-align: center;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0;

    & > span {
      display: flex;
      justify-content: start;
      align-items: center;
      & > svg {
        margin-right: 0.5em;
      }
    }
  }
`;
