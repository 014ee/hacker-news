import styled from "styled-components";

export const HeaderTop = styled.div`
  display: flex;
  & h1 {
    display: flex;
    flex-grow: 1;
  }
  & h2 {
    flex-grow: 1;
    font-size: 24px;
    text-transform: capitalize;
    opacity: ${(props) => props.theme.halfOpacity};
  }
  & h2.center {
    text-align: center;
  }
  & span {
    display: flex;
    justify-content: center;
    button + button {
      margin-left: 1rem;
    }
  }
`;
