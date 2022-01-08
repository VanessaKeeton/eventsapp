const prettyDate = (d) => {
  const date = new Date(d);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[date.getMonth()];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const twelveHour =
    date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const m = date.getHours() > 12 ? "pm" : "am";
  const dayName = days[date.getDay()];
  const mins = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

  return `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()} ${twelveHour}:${mins} ${m}`;
};

export default prettyDate;
