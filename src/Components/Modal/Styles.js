import styled from 'styled-components';

export const ModalBlock = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
  opacity: 0.9;
  transform: ${(props) => (props.open ? 'none' : 'translateY(100vh)')};
  transition: 0.25s transform ease-in-out;
  z-index: 999;
`;

export const UserName = styled.div`
  margin-top: 60px;
  & span {
    display: inline-block;
    margin-bottom: 20px;
    padding: 0.3em 0.5em;
    border-radius: 5px;
    background: ${(props) => props.theme.pointColor};
    font-size: 16px;
    line-height: 1rem;
    font-weight: 600;
    color: #111;
  }
  & h2 {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    color: ${(props) => props.theme.pointColor};
  }
`;

export const UserInfo = styled.div`
  & strong {
    display: flex;
    align-items:center;
    font-size: 16px;
    line-height:2em;
    color: ${(props) => props.theme.fontColor};
    svg {margin-right: 8px;}
  }
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top 60px;
    li {
      flex-grow: 1;
      margin-right: 20px;
      padding: 0.5em 0;
      border: 1px solid ${(props) => props.theme.fontColor};
      text-align: center;
      cursor: pointer;

    }
    li:last-child {
      margin-right: 0;
    }
  }
`;
