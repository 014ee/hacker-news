import styled from 'styled-components';

export const HeaderBlock = styled.header`
  position: sticky;
  top: 0;
  padding-top: 40px;
  padding-bottom: 18px;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
  z-index: 9;
`;

export const HeaderTop = styled.div`
  display: flex;
  & h1 {
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
      margin-left: 12px;
    }
  }
`;
