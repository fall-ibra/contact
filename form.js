// Description: commerce.js en JS
  
   var form = document.getElementById("contact-form");
   var name = document.getElementById("name");
   var tel = document.getElementById("phone");
   var email = document.getElementById("email");
   var submit = document.getElementById("submit");
   var para = document.querySelector("p");
   
   form.onsubmit = function (e) {
     if (name.value === "" || email.value === "" || tel.value === "") {
       e.preventDefault();
       para.textContent = "You need to fill in both names!";
     }
   };



   