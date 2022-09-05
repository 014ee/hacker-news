import "swiper/css/scrollbar";
import styled from "styled-components";

import Container from "./Container";
const Card = ({ children }) => {
  return (
    <CardBlock>
      <Container>{children}</Container>
    </CardBlock>
  );
};

export default Card;

const CardBlock = styled.div`
  padding: 2rem 0;
  background: ${(props) => props.theme.cardBgColor};
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  text-align: left;
  border-radius: 1rem;
`;
