import styled from 'styled-components';

// Main, Sub Header
export const HeaderBlock = styled.header`
  position: sticky;
  top: 0;
  padding-top: 40px;
  padding-bottom: 18px;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
  z-index: 9;
`;

export const HeaderModalBlock = styled.header`
  position: relative;
  top: 0;
  padding-top: 40px;
  padding-bottom: 18px;
  color: ${(props) => props.theme.fontColor};
`;

export const HeaderTop = styled.div`
  display: flex;
`;

export const HeaderLogo = styled.h1`
  flex-grow: 1;
`;

export const HeaderTitle = styled.h2`
  flex-grow: 1;
  font-size: 24px;
  text-transform: capitalize;
  opacity: ${(props) => props.theme.halfOpacity};
`;

export const HeaderDetailTitle = styled.h2`
  flex-grow: 1;
  font-size: 24px;
  text-transform: capitalize;
  text-align: center;
  opacity: ${(props) => props.theme.halfOpacity};
`;

export const HeaderOption = styled.ul`
  display: flex;
  justify-content: center;
`;

export const OptionButton = styled.li`
  & + li {
    margin-left: 16px;
  }
  cursor: pointer;
`;

export const GobackButton = styled.button`
  cursor: pointer;
`;
