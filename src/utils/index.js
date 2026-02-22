export const getDifferenceDateFromNow = (postDate) => {
  const difference = new Date() - new Date(postDate);
  let secondsPassed = Math.floor(difference / 1000);
  let minutesPassed = Math.floor(secondsPassed / 60);
  let hoursPassed = Math.floor(minutesPassed / 60);
  let daysPassed = Math.floor(hoursPassed / 24);
  let monthsPassed = Math.floor(daysPassed / 30);
  let yearsPassed = Math.floor(monthsPassed / 12);
  let message;

  if (secondsPassed > 0 && secondsPassed < 60) {
    let addition = secondsPassed > 1 ? " seconds ago" : " second ago";
    message = secondsPassed + addition;
  }

  if (minutesPassed > 0 && minutesPassed < 60) {
    let addition = minutesPassed > 1 ? " minutes ago" : " minute ago";
    message = minutesPassed + addition;
  }

  if (hoursPassed > 0 && hoursPassed < 24) {
    let addition = hoursPassed > 1 ? " hours ago" : " hour ago";
    message = hoursPassed + addition;
  }

  if (daysPassed > 0 && daysPassed < 30) {
    let addition = daysPassed > 1 ? " days ago" : " day ago";
    message = daysPassed + addition;
  }

  if (monthsPassed > 0 && monthsPassed < 12) {
    let addition = monthsPassed > 1 ? " months ago" : " month ago";
    message = monthsPassed + addition;
  }

  if (yearsPassed > 0) {
    let addition = yearsPassed > 1 ? " years ago" : " year ago";
    message = yearsPassed + addition;
  }

  return message;
};
