import styled from "styled-components";
import { MdAutorenew } from "react-icons/md";

import error from "assets/images/error.png";

const NetworkError = () => {
  return (
    <ErrorBlock>
      <img src={error} alt="error" />
      <p>
        Oops, something went wrong.
        <br /> Please try again.
      </p>
      <button type="button" onClick={() => window.location.reload()}>
        <MdAutorenew />
      </button>
    </ErrorBlock>
  );
};

export default NetworkError;

const ErrorBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  text-align: center;
  img {
    max-width: 60px;
  }
  p {
    margin-top: 1rem;
    font-size: 16px;
  }
  button {
    margin-top: 1rem;
    font-size: 38px;
  }
`;
