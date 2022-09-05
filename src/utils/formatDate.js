const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  };
  const result = new Date(date).toLocaleDateString("ko-KR", options);

  return result;
};

export default formatDate;
