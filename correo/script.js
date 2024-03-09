//script.js
function SenMail(){
    var params = {
        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_sro17iq","template_rhvukd9",params).then(function(res) {
        alert("Success! " + res.status);
    })
}