const requestURL = "json/directoryData.json";
const cards = document.querySelector(".cards");
const listItems = document.querySelector(".directory-list");

function callFetch(displayType) {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject); 
      const businesses = jsonObject["businesses"];
      businesses.forEach(displayType);
    });
}

function displayCardBusinesses(business) {
  let card = document.createElement("section");
  let h3 = document.createElement("h3");
  let img = document.createElement("img");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");
  let membershipLevel = document.createElement("p");

  h3.textContent = business.name;
  img.append = business.image;
  address.textContent = business.address;
  phone.textContent = business.phoneNumber;
  website.textContent = business.website;
  membershipLevel.textContent = business.membershipLevel;
  website.setAttribute("href", business.website);

  if (business.website.toLowerCase() === "no website") {
    website.removeAttribute("href");
  }

  card.appendChild(h3);
  card.appendChild(img);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);
  card.appendChild(membershipLevel);

  document.querySelector("div.cards").appendChild(card);
}

function displayListBusinesses(business) {
  let list = document.getElementById("businessList");
  let groupDiv = document.createElement("div");
  let li = document.createElement("li");
  let h3 = document.createElement("h3");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");
  let membershipLevel = document.createElement("p");

  h3.textContent = business.name;
  address.textContent = business.address;
  phone.textContent = business.phoneNumber;
  website.textContent = business.website;
  membershipLevel.textContent = business.membershipLevel;
  website.setAttribute("href", business.website);

  if (business.website.toLowerCase() === "no website") {
    website.removeAttribute("href");
  }

  li.appendChild(h3);
  groupDiv.appendChild(address);
  groupDiv.appendChild(phone);
  groupDiv.appendChild(website);
  groupDiv.appendChild(membershipLevel);
  li.appendChild(groupDiv);
  list.appendChild(li);

  document.querySelector("div.directory-list").appendChild(list);
}

callFetch(displayCardBusinesses);
callFetch(displayListBusinesses);
