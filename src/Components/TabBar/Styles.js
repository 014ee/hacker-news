import styled from 'styled-components';

export const TabBarBlock = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  background: ${(props) => props.theme.navBgColor};
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
`;

export const TabBarList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  max-width: 920px;
  margin: 0 auto;
`;

export const TabBarItem = styled.li`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  font-size: 12px;
  text-align: center;

  .circle {
    position: absolute;
    top: -20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #363636;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  }

  & > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 76px;
    > * {
      opacity: 0.87;
    }
  }
`;

export const Circle = styled.span`
  display: block;
  position: relative;
  top: -20px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
  text-align: center;
  border-radius: 50%;
  background: #363636;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
`;
