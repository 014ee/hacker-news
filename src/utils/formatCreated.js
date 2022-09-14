const formatCreated = (ms) => {
  const secondsAgo = Math.floor((new Date() - ms) / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(secondsAgo / (60 * 60));
  const daysAgo = Math.floor(secondsAgo / (60 * 60 * 24));
  const monthsAgo = Math.floor(secondsAgo / (60 * 60 * 24 * 30));
  const yearsAgo = Math.floor(secondsAgo / (60 * 60 * 24 * 365));

  if (yearsAgo >= 1) return `${yearsAgo} years`;
  if (monthsAgo >= 1) return `${monthsAgo} months`;
  if (daysAgo >= 1) return `${daysAgo} days`;
  if (hoursAgo >= 1) return `${hoursAgo} hours`;
  if (minutesAgo >= 1) return `${minutesAgo} minutes`;
  return `${Math.floor(secondsAgo)} seconds`;
};

export default formatCreated;
