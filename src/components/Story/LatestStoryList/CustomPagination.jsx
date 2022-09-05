import React, { useContext } from "react";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ActivePageHandlerContext } from "context/ActivePageContext";
import getPagenameFromParams from "utils/getPagenameFromParams";

const CustomPagination = ({
  activePage,
  storysCountPerPage,
  totalStorysCount,
}) => {
  const navigate = useNavigate();
  const handlePageChange = useContext(ActivePageHandlerContext);

  const enhancedHandlePageChange = (pageNumber) => {
    const pageName = getPagenameFromParams();
    navigate(`/${pageName}/${pageNumber}`);
    handlePageChange(pageNumber);
  };

  return (
    <PaginationBlock>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={storysCountPerPage}
        totalItemsCount={totalStorysCount}
        pageRangeDisplayed={5}
        onChange={enhancedHandlePageChange}
      />
    </PaginationBlock>
  );
};

export default CustomPagination;

const PaginationBlock = styled.div`
  width: 80%;
  max-width: 300px;
  margin: 40px auto 0;

  & > ul.pagination {
    display: flex;
    justify-content: space-between;
    li {
      opacity: ${(props) => props.theme.halfOpacity};
      &:hover {
        opacity: ${(props) => props.theme.opacity};
      }
    }
    li.active {
      color: ${(props) => props.theme.pointColor};
      opacity: 1;
    }
  }
`;
