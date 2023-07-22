export default function addZero(number) {
  if ((number + '').length === 1) {
    return `0${number}`;
  } else {
    return number;
  }
}
