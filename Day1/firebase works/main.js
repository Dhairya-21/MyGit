const firebaseConfig = {

  apiKey: "AIzaSyC0rHwLvOPP41CkRYY3rPaNgocW718gWbA",
  authDomain: "fir-demo-ed0af.firebaseapp.com",
  databaseURL: "https://fir-demo-ed0af-default-rtdb.firebaseio.com",
  projectId: "fir-demo-ed0af",
  storageBucket: "fir-demo-ed0af.appspot.com",
  messagingSenderId: "729866919987",
  appId: "1:729866919987:web:d3ed8119b716e32f19c346",
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var fname = getElementVal("fname");
  var lname = getElementVal("lname");
  var emailid = getElementVal("emailid");
  var pword = getElementVal("pword");
  var gender = getElementVal("gender");
  var source = getElementVal("source");
  var rangeinp = getElementVal("rangeinp");
  var photo = getElementVal("photo");
  var age = getElementVal("age");
  var bio = getElementVal("bio");

  saveMessages(
    fname,
    lname,
    emailid,
    pword,
    gender,
    source,
    rangeinp,
    photo,
    age,
    bio
  );

  document.getElementById("contactForm").reset();
}

const saveMessages = (
  fname,
  lname,
  emailid,
  pword,
  gender,
  source,
  rangeinp,
  photo,
  age,
  bio
) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    firstName: fname,
    lastName: lname,
    emailId: emailid,
    password: pword,
    gender: gender,
    sourceOfIncome: source,
    income: rangeinp,
    profilePhoto: photo,
    age: age,
    bio: bio,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};