const newDate = new Date();
const day = newDate.getDay();
if (day === 1 || day === 2) {
  document.getElementById("banner").style.display = "block";
}