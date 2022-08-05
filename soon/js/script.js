const loginForm = document.querySelector("#fh5co-header-subscribe");

function SendMail(event) {
  event.preventDefault();
  var params = {
    email_id: document.getElementById("email_id").value,
  };
  emailjs
    .send("service_m66258g", "template_z4hcif4", params)
    .then(function (res) {
      console.log("Success! " + res.status);
    });
}

loginForm.addEventListener("submit", SendMail);
