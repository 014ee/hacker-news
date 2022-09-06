export const getOnlyDomainName =
  /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;

// export const getOnlyPageName = /(?<=\/).*?(?=\/)/; 사파리에서 lookbehind 지원 안함
export const getOnlyPageName = /[^/].*?(?=\/)/;
