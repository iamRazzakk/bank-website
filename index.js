document.getElementById('btn-sumbit').addEventListener("click", function(){
    const emailField = document.getElementById("user-email")
    const email = emailField.value;
    const passwordField = document.getElementById("password")
    const password = passwordField.value;
    console.log(email, password);
})