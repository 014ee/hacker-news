import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";
import styled from "styled-components";

const ThemeButton = ({ theme, setTheme }) => {
  return (
    <ThemeButtonBlock
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <MdOutlineNightlight />
    </ThemeButtonBlock>
  );
};

export default ThemeButton;

const ThemeButtonBlock = styled.button`
  position: fixed;
  bottom: 88px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.pointColor};
  font-size: 21px;
  color: #fff;
  z-index: 999;
`;
