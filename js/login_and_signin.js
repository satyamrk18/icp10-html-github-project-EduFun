//sign in functionality
let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
let userNameInput = document.getElementById("sign-in-username");
let passWordInput = document.getElementById("sign-in-password");
function addData() {
  let userName = userNameInput.value.trim();
  let pass = passWordInput.value.trim();
  if (userName === "" || pass === "") {
    alert("plese enter a username or password");
    return;
  }

  const userData = {
    name: userName,
    password: pass,
  };
  userInfo.push(userData);
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  console.log(userInfo);

  userNameInput.value = "";
  passWordInput.value = "";
}

//log in functionality
const logInUSerName = document.getElementById("log-in-username");
const logInUserPassword = document.getElementById("log-in-password");
function login() {
  let logInName = logInUSerName.value.trim();
  let logInPassword = logInUserPassword.value.trim();
  if (logInName === "" || logInPassword === "") {
    alert("please enter a username or password");
    return;
  }
  //find username and password
  let userFind = userInfo.find(
    (user) => user.name === logInName && user.password === logInPassword
  );
  console.log("User found:", userFind); // Debugging
  if (userFind) {
    alert("log in successfull");
  } else {
    alert("log in failed");
  }
}
