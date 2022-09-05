import styled from "styled-components";

export const SearchBlock = styled.div`
  position: relative;
  margin-top: 1em;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding-top: 1em;
  padding-left: 3.2em;
  padding-bottom: 1em;
  padding-right: 1em;
  background-color: ${(props) => props.theme.subBgColor};
  color: ${(props) => props.theme.fontColor};
`;

export const Area = styled.span`
  position: absolute;
  top: 11px;
  left: 12px;
`;
