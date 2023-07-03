export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let minute = newDate.getMinutes();
  let hour = newDate.getHours();
  let secunde = newDate.getSeconds();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date} ${hour}:${minute}:${secunde}`;
}
