
function ajax() {

  var xhttp = new XMLHttpRequest;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var todo = JSON.parse(this.responseText);

      var output = "";

      for (var i = 0; i < (todo).length; i++) {
        output += "<p>" + todo[i].id + "  " + check(todo, i) + " " + todo[i].title + "</p>";
        (document.getElementById("list")).innerHTML = output;

      }
    }
  }
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

function check(a, b) {
  if (a[b].completed == true) {
    return "<input class='form-check-input' type='checkbox' checked disabled>";
  }
  else {
    return "<input class='form-check-input' name='checkboxin' type='checkbox'>";
  }
}
function addList() {
  ajax();
  (document.getElementById("activity")).classList.add("active");

}

var pc;
function count() {
  var c = "";
  var x = document.getElementsByName('checkboxin');

  for (let index = 0; index < x.length; index++) {
    if (x[index].checked) {
      c++;
    }
    else {
    }
  }
  // console.log(c);

  // console.log(x.length);
  
  var p = new Promise(function (resolve, reject) {

    if (c < 5) {
      reject();
    } else {
      if (pc < 5) {
        resolve();
      }
    }
    pc = c;
  });
  p.then(function () {
    alert("Congrats. 5 Tasks have been Successfully Completed");
    console.log("completed 5 tasks");

  }).catch(function () {

  });
}

function redirect() {
  window.location.replace("index.html");
}






