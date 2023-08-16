document.getElementById('btn-sumbit').addEventListener("click", function(){
    const emailField = document.getElementById("user-email")
    const email = emailField.value;
    const passwordField = document.getElementById("password")
    const password = passwordField.value;
    if(email === "rakibt23p@gmail.com" && password === "Ctg..123"){
        window.location.href = "bank.html";
    }else{
        alert("Please input The currect Password")
    }
})