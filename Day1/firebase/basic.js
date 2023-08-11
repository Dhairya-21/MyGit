var nameRegex = /^[a-zA-Z ]+$/;
var emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
document.write(pword);
if(!nameRegex.test(document.getElementById("fname"))){
    alert('Please enter a valid first name'); 
}
else if(!nameRegex.test(document.getElementById("lname"))) {
    alert ('Please enter a valid last name.');
}
else if(!emailRegex.test(document.getElementById("email"))){
    alert ("Invalid Email Address");
}
else if(!(document.getElementById("pword").value === document.getElementById("cpword").value)){
    alert("Both passwords are different");
}