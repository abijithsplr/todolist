var mail = document.getElementById("username");
var pass = document.getElementById("password");
function validate() {
  console.log(mail.value, pass.value);

  if ((mail.value == "admin") && (pass.value == 12345)) {
    console.log(true);
    success();
  } else {
    console.log(false);
    fail();
  }

}

function success() {
  console.log('SUCCESS');
  document.getElementById("login").setAttribute("action", "main.html");
  // location.replace("main.html");
}
function fail() {
  console.log('FAIL');
  // document.getElementById("login").setAttribute("action", "index.html");
  // location.replace('index.html');
}

// function redirect() {
//   (document.getElementById("login")).removeAttribute("action", "main.html");
//   (document.getElementById("login")).setAttribute("action", "index.html");
//   location.replace('main.html');
//   console.log("sdfgh");
// }