function SendMail() {
  var params = {
    email_id: document.getElementById("email_id").value,
  };
  emailjs
    .send("service_m66258g", "template_z4hcif4", params)
    .then(function (res) {
      alert("Success! " + res.status);
    });
}
