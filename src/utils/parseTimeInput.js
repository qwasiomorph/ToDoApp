export function parseTime(input) {
  let time = input.replace(/\D/g, '');

  return time;
}

export function timeStringToInt(sTime) {
  let [minutes, seconds] = sTime.split(':');
  seconds = parseInt(seconds) + parseInt(minutes) * 60;
  return seconds;
}
