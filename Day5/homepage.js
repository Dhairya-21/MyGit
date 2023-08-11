function redirect() {
  window.location = "writeblog.html";
}
function follow() {
  var btn = document.getElementsByClassName("btn1");
}
function redirect2() {
  window.location = "profile.html";
}
function redirect3(){
  window.location="loginpg.html"
}
function hide(str) {
  document.getElementById(str).style.display = "none";
  document.getElementById(str + "h").style.display = "none";
}
function follow(id) {
  if (document.getElementById(id).innerHTML == "Following") {
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).innerHTML = "Follow";
    document.getElementById(id).style.color = "black";
  } else {
    document.getElementById(id).style.backgroundColor = "black";
    document.getElementById(id).innerHTML = "Following";
    document.getElementById(id).style.color = "white";
  }
}
var x = 0;
function showData() {
  var name = [];
  var email = [];
  var rows = document.getElementById("table1").getElementsByTagName("tr");
  for (let a = 1; a < rows.length; a++) {
    name.push(
      document.getElementById("table1").getElementsByTagName("td")[a * 3 - 2]
        .innerHTML
    );
    email.push(
      document.getElementById("table1").getElementsByTagName("td")[a * 3 - 1]
        .innerHTML
    );
  }
  document.getElementById("name1").innerHTML = name[x];
  document.getElementById("email1").innerHTML = email[x];
}
function scroll1(num) {
  var name = [];
  var email = [];
  var rows = document.getElementById("table1").getElementsByTagName("tr");
  for (let a = 1; a < rows.length; a++) {
    name.push(
      document.getElementById("table1").getElementsByTagName("td")[a * 3 - 2]
        .innerHTML
    );
    email.push(
      document.getElementById("table1").getElementsByTagName("td")[a * 3 - 1]
        .innerHTML
    );
  }
  if (num == 1 && x == 0) {
    x = name.length - 1;
    document.getElementById("name1").innerHTML = name[x];
    document.getElementById("email1").innerHTML = email[x];
  } else if (num == 1) {
    x -= 1;
    document.getElementById("name1").innerHTML = name[x];
    document.getElementById("email1").innerHTML = email[x];
  } else if (num == 9 && x == name.length - 1) {
    x = 0;
    document.getElementById("name1").innerHTML = name[x];
    document.getElementById("email1").innerHTML = email[x];
  } else if (num == 9) {
    x += 1;
    document.getElementById("name1").innerHTML = name[x];
    document.getElementById("email1").innerHTML = email[x];
  }
}
setInterval(function(){
  window.onload = showData();
}, 2000)