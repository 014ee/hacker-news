/**
 * location.pathname에서 '/'과 '/' 사이의 문자를 반환하는 함수
 * ex. /article/1 => article
 */
import { getOnlyPageName } from "./regExp";
const getPagenameFromParams = () => {
  return window.location.pathname.match(getOnlyPageName).join("");
};

export default getPagenameFromParams;
