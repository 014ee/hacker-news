import { getOnlyPageName } from "./regExp";
const getPagenameFromParams = () => {
  return window.location.pathname.match(getOnlyPageName).join("");
};

export default getPagenameFromParams;
