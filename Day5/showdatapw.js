var stdno = 0;
      var tbody = document.getElementById("tbody1");
      function AddItemToTable(name, email) {
        let trow = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        td1.innerHTML = ++stdno;
        td2.innerHTML = name;
        td3.innerHTML = email;

        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);

        tbody.appendChild(trow);
      }
      function AddAllItemsToTable(Reg) {
        stdno = 0;
        tbody.innerHTML = "";
        Reg.forEach((element) => {
          AddItemToTable(element.Email, element.Password);
        });
      }
      
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
      import {
        getDatabase,
        ref,
        child,
        onValue,
        get,
      } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
      
      const firebaseConfig = {
        apiKey: "AIzaSyC0rHwLvOPP41CkRYY3rPaNgocW718gWbA",
        authDomain: "fir-demo-ed0af.firebaseapp.com",
        databaseURL: "https://fir-demo-ed0af-default-rtdb.firebaseio.com",
        projectId: "fir-demo-ed0af",
        storageBucket: "fir-demo-ed0af.appspot.com",
        messagingSenderId: "729866919987",
        appId: "1:729866919987:web:d3ed8119b716e32f19c346",
      };
      
      const app = initializeApp(firebaseConfig);
      

      const db = getDatabase();

      function GetAllDataOnce() {
        const dbRef = ref(db);
        get(child(dbRef, "Users")).then((snapshot) => {
          var data = [];
          snapshot.forEach((childSnapshot) => {
            students.push(childSnapshot.val());
          });
          AddAllItemsToTable(data);
        });
      }
      
      function GetAllDataRealtime() {
        const dbRef = ref(db, "Users");
        onValue(dbRef, (snapshot) => {
          var data = [];
          snapshot.forEach((childSnapshot) => {
            data.push(childSnapshot.val());
          });
          AddAllItemsToTable(data);
        });
      }
      
      window.onload = GetAllDataRealtime;