const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyC0rHwLvOPP41CkRYY3rPaNgocW718gWbA",
    authDomain: "fir-demo-ed0af.firebaseapp.com",
    databaseURL: "https://fir-demo-ed0af-default-rtdb.firebaseio.com",
    projectId: "fir-demo-ed0af",
    storageBucket: "fir-demo-ed0af.appspot.com",
    messagingSenderId: "729866919987",
    appId: "1:729866919987:web:d3ed8119b716e32f19c346"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("Form");

document.getElementById("Form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const fname = getInputValue("fname");
  const lname = getInputValue("lname");
  const email = getInputValue("email");
  // const password = getInputValue("password");
  // const source = getInputValue("source");
  // const income = getInputValue("income");
  // const profp = getInputValue("profp");
  // const age = getInputValue("age");
  // const bio = getInputValue("bio");

  saveMessages(fname, lname, email,); 
    // password, source, income, profp, age, bio);

  document.querySelector(".alert").style.display = "block";
  
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("Form").reset();
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

function saveMessages(
  fname,
  lname,
  email,
  // password,
  // source,
  // income,
  // profp,
  // age,
  // bio
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    email: email,
    // password: password,
    // source: source,
    // income: income,
    // profp: profp,
    // age: age,
    // bio: bio,
  });
}
