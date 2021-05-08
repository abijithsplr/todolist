if (localStorage.getItem("isLogin") === 'true') {
  location.replace('main.html');
  var Backlen = history.length;
  history.go(-Backlen);
  window.location.href = "main.html";
}
var mail = document.getElementById("username");
var pass = document.getElementById("password");
function validate() {
  if ((mail.value == "admin") && (pass.value == 12345)) {
    // console.log(true);
    success();

  } else {

    // console.log(false);
    fail();
  }

}

function success() {
  console.log('SUCCESS');
  // document.getElementById("login").setAttribute("action", "main.html");
  localStorage.setItem("isLogin", true);
  // location.replace("main.html");
}
function fail() {
  console.log('FAIL');
  localStorage.setItem("isLogin", false);
  // document.getElementById("login").setAttribute("action", "index.html");
  // location.replace('index.html');
}

// function redirect() {
//   (document.getElementById("login")).removeAttribute("action", "main.html");
//   (document.getElementById("login")).setAttribute("action", "index.html");
//   location.replace('main.html');
//   console.log("sdfgh");
// }