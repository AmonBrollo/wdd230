let daynames = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

let months = [
  "January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"
];

let d = new Date();
let dayname = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let todaysDate = `${dayname}, ${monthName} ${d.getDate()}, ${d.getFullYear()}`; 

document.getElementById("lastUpdate").textContent = todaysDate;