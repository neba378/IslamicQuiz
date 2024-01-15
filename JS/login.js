function checkLogin(enteredEmail, enteredPassword, email, password) {
  if (enteredEmail === email && enteredPassword === password) {
    return true;
  }
  return false;
}

// Retrieve user data from local storage
function getUserData() {
  // Retrieve the JSON string from local storage
  const userDataJSON = localStorage.getItem("userData");

  // Parse the JSON string to get the user data object
  const userData = JSON.parse(userDataJSON);

  return userData;
}
function isLoggedIn() {
  // Retrieve login status from local storage or session storage
  var loggedIn = localStorage.getItem("loggedIn");

  // Return true if the user is logged in, otherwise false
  return loggedIn === "true";
}

if (window.location.pathname === "/dashboard.html") {
  if (!isLoggedIn()) {
    // User is not logged in, redirect to login page or display error message
    window.location.href = "login.html"; // Redirect to login page
  }
}

document.getElementById("login-button").addEventListener("click", () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email.trim() === "") {
    document.getElementById("error-msg").innerHTML = "Email field is required!";
    document.getElementById("email").addEventListener("focus", () => {
      document.getElementById("error-msg").innerHTML = "";
    });
  }

  // Validate password
  else if (password.trim() === "") {
    document.getElementById("error-msg").innerHTML =
      "Password field is required!";
    document.getElementById("email").addEventListener("focus", () => {
      document.getElementById("error-msg").innerHTML = "";
    });
  } else if (!isValidEmail(email)) {
    document.getElementById("error-msg").innerHTML = "Invalid email!";
    document.getElementById("email").addEventListener("focus", () => {
      document.getElementById("error-msg").innerHTML = "";
    });
  } else {
    const user = getUserData();
    if (user) {
      var savedEmail = user.email;
      var savedPassword = user.password;
      if (checkLogin(email, password, savedEmail, savedPassword)) {
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("error-msg").innerHTML =
          "Please correct email or password!";
        document.getElementById("email").addEventListener("focus", () => {
          document.getElementById("error-msg").innerHTML = "";
        });
        document.getElementById("password").addEventListener("focus", () => {
          document.getElementById("error-msg").innerHTML = "";
        });
      }
    } else {
      document.getElementById("error-msg").innerHTML =
        "You do not have any account, please sign up by clicking the link below!";
    }
  }
});

function isValidEmail(email) {
  // Use a regular expression to validate email format
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}
