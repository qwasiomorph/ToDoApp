export function parseTime(input) {
  let time = input.replace(/D/g, '');
  if (!time) {
    time == '00';
  }
  if (time.length === 1) {
    time = `0${time}`;
  }
  return time;
}

export function timeStringToInt(sTime) {
  let [minutes, seconds] = sTime.split(':');
  seconds = parseInt(seconds) + parseInt(minutes) * 60;
  return seconds;
}
