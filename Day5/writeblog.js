// function publish() {
//   alert("Your Story has been published");
// }
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

var Medium = firebase.database().ref("Medium");

document.getElementById("Medium").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var title = document.getElementById("title").value;
  var story = document.getElementById("body").value;

  saveMessages(title, story);

  document.getElementById("Medium").reset();
}

const saveMessages = (title, story) => {
  var newMedium = Medium.push();

  newMedium.set({
    Title: title,
    Story: story,
  });
};
