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

const db = getDataBase();
// var contactFormDB = firebase.database().ref("contactForm");
// contactFormDB.on("value", function (snapshot) {
//   var data = snapshot.val();
//     snapshot.forEach(function (element) {
//       document.getElementById("print").innerHTML +=
//         element.val();
//     });
// });
//   contactFormDB.onValue(function(snap) {
//     snap.val();
//   })
var tbody = document.getElementById("tablebody");
function addElement(
  fname,
  lname,
  email,
  pword,
  gender,
  source,
  income,
  profp,
  age,
  bio
) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");
  let td8 = document.createElement("td");
  let td9 = document.createElement("td");
  let td10 = document.createElement("td");

  td1.innerHTML = fname;
  td2.innerHTML = lname;
  td3.innerHTML = email;
  td4.innerHTML = pword;
  td5.innerHTML = gender;
  td6.innerHTML = source;
  td7.innerHTML = income;
  td8.innerHTML = profp;
  td9.innerHTML = age;
  td10.innerHTML = bio;

  tr.appendChild(tr1);
  tr.appendChild(tr2);
  tr.appendChild(tr3);
  tr.appendChild(tr4);
  tr.appendChild(tr5);
  tr.appendChild(tr6);
  tr.appendChild(tr7);
  tr.appendChild(tr8);
  tr.appendChild(tr9);
  tr.appendChild(tr10);

  tbody.appendChild(tr);
}
function AddItem(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    AddItem(
      element.firstName,
      element.lastName,
      element.emailId,
      element.password,
      element.gender,
      element.sourceOfIncome,
      element.income,
      element.profilePhoto,
      element.age,
      element.bio
    );
  });
}

function Getdata() {
  const dbref = ref(db);
  // get(child(dbref, "contactForm")).then((snapshot) => {
  //   var data1 = [];
  //   snapshot.forEach((childSnapShot) => {
  //     data1.push(childSnapShot.val());
  //   });
  //   Addtable(data1);
  // });
  onValue(dbref, (snapshot) => {
    var data1 = [];
    snapshot.forEach((childSnapShot) => {
      data1.push(childSnapShot.val());
    });
    AddItem(data1);
  });
}
window.onload = Getdata();
