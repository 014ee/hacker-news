import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdAutorenew } from "react-icons/md";
import styled from "styled-components";

import error from "assets/error.png";
import { ActivePageHandlerContext } from "context/ActivePageContext";
import getPagenameFromParams from "utils/getPagenameFromParams";

const NotFoundError = ({ redirection }) => {
  const navigate = useNavigate();
  const handlePageChange = useContext(ActivePageHandlerContext);
  const pageName = getPagenameFromParams();
  return (
    <ErrorBlock>
      <img src={error} alt="error" />
      <p>
        Sorry, that page can't be found.
        <br /> You can move on to the main page.
      </p>
      <button
        type="button"
        onClick={() => {
          handlePageChange(1);
          navigate(redirection ? redirection : `/${pageName}/1`);
        }}
      >
        <MdAutorenew />
      </button>
    </ErrorBlock>
  );
};

export default NotFoundError;

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
