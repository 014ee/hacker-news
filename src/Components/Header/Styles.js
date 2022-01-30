import styled from 'styled-components';

export const HeaderBlock = styled.header`
  position: sticky;
  top: 0;
  padding-top: 40px;
  padding-bottom: 18px;
  border-bottom: 1px solid #333;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
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
  opacity: 0.52;
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

export const HeaderDetailTitle = styled.h2`
  flex-grow: 1;
  font-size: 24px;
  text-transform: capitalize;
  opacity: 0.52;
  text-align: center;
`;
export const GobackButton = styled.button`
  cursor: pointer;
`;
