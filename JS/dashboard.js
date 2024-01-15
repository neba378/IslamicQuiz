const { link } = require("fs");

function isLoggedIn() {
  // Retrieve login status from local storage or session storage
  var loggedIn = localStorage.getItem("loggedIn");

  // Return true if the user is logged in, otherwise false
  return loggedIn === "true";
}

const card_link = document.getElementById("each-card");
