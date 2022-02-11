import styled from 'styled-components';

export const TabBarBlock = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  margin: 0 auto;
  background: ${(props) => props.theme.navBgColor};
  box-shadow: 1px -1px 4px rgba(0, 0, 0, 0.2);
  z-index: 99;

  > div {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 76px;
      font-size: 12px;
      text-align: center;
      span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > * {
          opacity: ${(props) => props.theme.halfOpacity};
        }
      }
    }

    a.circle {
      span {
        display: flex;
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: ${(props) => props.theme.navHomeBgColor};
        box-shadow: 1px -2px 4px rgba(0, 0, 0, 0.2);
      }
    }

    a.active {
      span {
        > * {
          opacity: 1;
        }
      }
    }
  }
`;
