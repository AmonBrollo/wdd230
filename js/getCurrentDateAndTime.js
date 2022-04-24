let todaysDate = new Date(document.lastModified).toLocaleString("en-US", {
  hour12: true,
});

document.getElementById("lastUpdate").textContent = todaysDate;