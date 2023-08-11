function number(num) {
    var st = document.getElementById("screen").value;
    document.getElementById("screen").value = st + num;
}
function clearScreen() {
    document.getElementById("screen").value = "";
    document.querySelector("#dot").disabled = false;
}
function dot() {
    var st = document.getElementById("screen").value;
    document.getElementById("screen").value = st + ".";
    document.querySelector("#dot").disabled = true;
}
function div() {
    var a = document.getElementById("screen").value;
    document.getElementById("screen").value = "";
    document.getElementById("operation").value = "/";
    document.getElementById("num").value = a;
    document.querySelector("#dot").disabled = false;
}
function mul() {
    var a = document.getElementById("screen").value;
    document.getElementById("screen").value = "";
    document.getElementById("operation").value = "*";
    document.getElementById("num").value = a;
    document.querySelector("#dot").disabled = false;
}
function add() {
    var a = document.getElementById("screen").value;
    document.getElementById("screen").value = "";
    document.getElementById("operation").value = "+";
    document.getElementById("num").value = a;
    document.querySelector("#dot").disabled = false;
}
function sub() {
    var a = document.getElementById("screen").value;
    document.getElementById("screen").value = "";
    document.getElementById("operation").value = "-";
    document.getElementById("num").value = a;
    document.querySelector("#dot").disabled = false;
}
function equal() {
    var a = document.getElementById("screen").value;
    var b = document.getElementById("num").value;
    var op = document.getElementById("operation").value;
    document.getElementById("operation").value = '';
    document.querySelector("#dot").disabled = false;
  var c = 0;
  if (op == "/") {
    c = parseFloat(b)/parseFloat(a);
    document.getElementById("screen").value = c;
    document.getElementById("num").value = '';
}
if (op == "*") {
      c = parseFloat(b)*parseFloat(a);
      document.getElementById("screen").value = c;
      document.getElementById("num").value = '';
    }
    if (op == "+") {
      c = parseFloat(b)+parseFloat(a);
      document.getElementById("screen").value = c;
      document.getElementById("num").value = '';
    }
    if (op == "-") {
      c = parseFloat(b)-parseFloat(a);
    document.getElementById("screen").value = c;
    document.getElementById("num").value = '';
  }
}
