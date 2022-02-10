export const useDateFormat = (storyTime) => {
  const secondsAgo = Math.floor((new Date() - storyTime * 1000) / 1000);

  let interval = Math.floor(secondsAgo / (60 * 60 * 24 * 365));
  if (interval >= 1) {
    return `${interval} years`;
  }

  interval = Math.floor(secondsAgo / (60 * 60 * 24 * 30));
  if (interval >= 1) {
    return `${interval} months`;
  }

  interval = Math.floor(secondsAgo / (60 * 60 * 24));
  if (interval >= 1) {
    return `${interval} days`;
  }

  interval = Math.floor(secondsAgo / (60 * 60));
  if (interval >= 1) {
    return `${interval} hours`;
  }

  interval = Math.floor(secondsAgo / 60);
  if (interval >= 1) {
    return `${interval} minutes`;
  }

  return `${Math.floor(secondsAgo)} seconds`;
};

export const today = new Date().toLocaleDateString('kr-KO', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'short',
});

export const onedayago = new Date(
  new Date() - 1000 * 60 * 60 * 24
).toLocaleDateString('kr-KO', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'short',
});

export const twodaysago = new Date(
  new Date() - 1000 * 60 * 60 * 24 * 2
).toLocaleDateString('kr-KO', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'short',
});
