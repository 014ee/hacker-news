import React, { useState } from "react";
import styled from "styled-components";

import SearchBar from "components/SearchBar/index.jsx";
import { IconInfo } from "assets/Icons";

const tags = [
  "web",
  "enginer",
  "backend",
  "algorithms",
  "JavaScript",
  "HTML",
  "CSS",
];

const ModalSearch = () => {
  const [tag, setTag] = useState("");

  const handleSetTag = (e) => {
    setTag(e.target.value);
  };

  return (
    <>
      <SearchBar tag={tag} onChange={handleSetTag} />
      <SearchTag>
        <ul>
          {tags.map((tag, index) => (
            <li key={index} onClick={(e) => setTag(e.target.innerText)}>
              {tag}
            </li>
          ))}
        </ul>
      </SearchTag>
      <SearchTipBlock />
    </>
  );
};

export default ModalSearch;

const SearchTipBlock = React.memo(() => {
  return (
    <SearchTip>
      <strong>
        <IconInfo /> TIP
      </strong>
      <p>
        Show HN is for something you've made that other people can play with. HN
        users can try it out, give you feedback, and ask questions in the
        thread.
      </p>
    </SearchTip>
  );
});

const SearchTag = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    li {
      padding: 0.2em 1em;
      margin: 0.4em;
      border: 1px solid ${(props) => props.theme.fontColor};
      border-radius: 30px;
      font-size: 12px;
      cursor: pointer;
    }
  }
`;

const SearchTip = styled.section`
  padding: 20px;
  background: ${(props) => props.theme.subBgColor};
  strong {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.subPointColor};
    svg {
      margin-right: 8px;
    }
  }
  p {
    margin-top: 20px;
  }
`;
