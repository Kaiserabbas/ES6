/* eslint-disable */ /* using luxon library for date */
import { DateTime } from 'luxon';

const DateOrTime = luxon.DateTime;
const currentDt = DateOrTime.now();
// Output: "Year: 2023"
const year = currentDt.year;
const month = currentDt.month;
const day = currentDt.day;

const hour = currentDt.hour;
const min = currentDt.minute;
const sec = currentDt.second;

const weekDay = currentDt.weekdayLong;
const monthName = currentDt.monthLong;

const zone = currentDt.zoneName;
const dateAndTime = () => {
  const dateDiv = document.getElementById('date');
  dateDiv.innerHTML = ` ${day} - ${month} - ${year}| ${monthName} | ${weekDay} | ${hour} : ${min} : ${sec} | ${zone}`;
};

export default dateAndTime;
