
document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let message = document.getElementById("message").value.trim();

let successMessage = document.getElementById("successMessage");

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(name === "" || email === "" || phone === "" || message === ""){
alert("Please fill all fields");
return;
}

if(!email.match(emailPattern)){
alert("Please enter a valid email");
return;
}

if(phone.length < 10){
alert("Phone number must be at least 10 digits");
return;
}

successMessage.innerHTML = "Form Submitted Successfully!";

document.getElementById("contactForm").reset();

});
