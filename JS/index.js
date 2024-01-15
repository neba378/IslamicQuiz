function saveUserData(Fname, Lname, email, password) {
  const userData = {
    Fname: Fname,
    Lname: Lname,
    email: email,
    password: password,
    quiz_status: [],
  };

  const userDataJSON = JSON.stringify(userData);

  try {
    localStorage.setItem("userData", userDataJSON);
    return true; // Return true if data was successfully saved
  } catch (error) {
    console.error("Error saving user data to localStorage:", error);
    return false; // Return false if there was an error saving the data
  }
}

// signup check

document.getElementById("signup-button").addEventListener("click", () => {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var repeatedPassword = document.getElementById("r-password").value;

  if (firstName.trim() === "") {
    document.getElementById("error-msg").innerHTML = "First name is required!";
    document.getElementById("first-name").addEventListener("focus", () => {
      document.getElementById("error-msg").innerHTML = "";
    });
  }

  // Validate last name
  else if (lastName.trim() === "") {
    document.getElementById("error-msg").innerHTML = "Last name is required!";
    document.getElementById("last-name").addEventListener("focus", () => {
      document.getElementById("error-msg").innerHTML = "";
    });
  }

  // Validate email
  else if (email.trim() === "") {
    document.getElementById("error-msg").innerHTML = "Email field is required!";
    document.getElementById("email").addEventListener("focus", () => {
      document.getElementById("error-msg").innerHTML = "";
    });
  }

  // Validate password
  else if (password.trim() === "") {
    document.getElementById("error-msg").innerHTML =
      "Password field is required!";
    document.getElementById("password").addEventListener("focus", () => {
      document.getElementById("error-msg").innerHTML = "";
    });
  } else if (repeatedPassword.trim() === "") {
    document.getElementById("error-msg").innerHTML = "Please repeat password!";
    document.getElementById("r-password").addEventListener("focus", () => {
      document.getElementById("error-msg").innerHTML = "";
    });
  } else if (password.length < 8) {
    document.getElementById("error-msg").innerHTML =
      "Password Must be 8 or more!";
    document.getElementById("password").addEventListener("focus", () => {
      document.getElementById("error-msg").innerHTML = "";
    });
  } else if (!(password === repeatedPassword)) {
    document.getElementById("error-msg").innerHTML =
      "password must be the same!";
    document.getElementById("r-password").addEventListener("focus", () => {
      document.getElementById("error-msg").innerHTML = "";
    });
  } else if (!isValidEmail(email)) {
    document.getElementById("error-msg").innerHTML = "Email is not valid!";
    document.getElementById("email").addEventListener("focus", () => {
      document.getElementById("error-msg").innerHTML = "";
    });
  } else {
    const saved = saveUserData(firstName, lastName, email, password);
    if (saved) {
      document.getElementById("error-msg").style.color = "green";
      document.getElementById("error-msg").innerHTML =
        "You have successfully registered. Go to login page and access the pages!";
    } else {
      document.getElementById("error-msg").innerHTML =
        "sorry, :( try again later!";
    }
  }
});

// Email validation function
function isValidEmail(email) {
  // Use a regular expression to validate email format
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}
