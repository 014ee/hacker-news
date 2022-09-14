import styled from "styled-components";

export const ModalBlock = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.modalBgColor};
  color: ${(props) => props.theme.fontColor};
  transform: ${(props) => (props.open ? "none" : "translateY(100vh)")};
  transition: 0.25s transform ease-in-out;
  z-index: 999;
`;
