export const currentDate = () => {
  const time = new Date().toString().split(' ');
  const day = time[2][0] === '0' ? time[2][1] : time[2];
  const currentTime = time[0] + ', ' + day + ' ' + time[1] + ' ' + time[3];

  return currentTime;
};
