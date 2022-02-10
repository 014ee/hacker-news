import styled from 'styled-components';

export const SearchBlock = styled.div`
  position: relative;
  margin-top: 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding-top: 1em;
  padding-left: 3.2em;
  padding-bottom: 1em;
  padding-right: 1em;
  background: ${(props) => props.theme.subBgColor};
  color: ${(props) => props.theme.fontColor};
`;

export const Area = styled.span`
  display: inline-block;
  position: absolute;
  top: 11px;
  left: 12px;
`;
