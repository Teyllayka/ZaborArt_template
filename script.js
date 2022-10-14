

function validate() {
  
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.getElementById("email").value;
   if(reg.test(address) == false) {
      alert('Введите корректный e-mail');
      return false;
   }

   

   else {
      let fullName = document.getElementById("name").value;
      let userEmail = document.getElementById("email").value;
      let userMessage = document.getElementById("description").value;
      let category = document.getElementById("category").value;
      let phone = document.getElementById("phone").value;

      var params = {
         from_email: userEmail,
         from_name: fullName,
         from_category:category,
         from_phone:phone,
         message: userMessage,
      }
      alert("a")
      emailjs.init("user_HUoPQRsnR9OU761JxnBoi");
      emailjs.send("service_399hfz4","template_b5ulg39", params);
      alert("s")
   }
}