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

  var Users = firebase.database().ref("Users"); 
  
  document.getElementById("Register").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();

    var user = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pword = document.getElementById("pwd").value;

    saveMessages(user, email, pword);
    document.getElementById("Register").reset();

  }
  const saveMessages = (user, email, pword) => {
     var newUsers = Users.push();
     newUsers.set({
        Name:user,
        Email : email,
        Password : pword
      //   DateCreated : firebase.firestore.FieldValue.serverTimestamp()
     });
  };