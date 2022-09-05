import styled from "styled-components";

import spinner from "assets/spinner.gif";

const Loading = () => {
  return (
    <LoadingBlock>
      <img src={spinner} alt="spinner" />
    </LoadingBlock>
  );
};

export default Loading;

const LoadingBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  img {
    max-width: 60px;
  }
`;
