let route = "http://127.0.0.1:5000/api/v1/";

document.getElementById("btn2").addEventListener("click",
function fetchRegister(event){
    event.preventDefault();
    let url = route+"auth/signup"
    let firstname = document.forms["register"]["fname"].value;
    let lastname = document.forms["register"]["lname"].value;
    let name = document.forms["register"]["username"].value;
    let emailaddress = document.forms["register"]["emailaddress"].value;
    let pasword = document.forms["register"]["password"].value;
    let repeatpassword = document.forms["register"]["repeatpassword"].value;
    let atIndex=emailaddress.indexOf("@");
    let dotIndex=emailaddress.lastIndexOf(".");
    if (firstname == ""||lastname == ""||name == ""||pasword ==""||repeatpassword == "") {
        alert("all fields are required");
        return false;
    }
    else if (atIndex<1 || dotIndex-atIndex < 2) {
        alert("email not valid");
        return false;
    }
    else if(pasword != repeatpassword){
        alert("password and repeat password should match");
        return false; 
    }
    let data = {fname:firstname, lname:lastname, username:name, emailaddress:emailaddress,password:pasword, repeatpassword:repeatpassword};                    
    fetch(url, {
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data) => {
        if(data["message"]==="succesfully registered"){ 
            window.location.replace("login.html");  
        }
        if (data == ['data']){
            window.location.replace("login.html");
        }
        else if (data["message"] == "unable to process request."){
            document.getElementById("title").innerText = "check emaildress and password then try again!!";
        }
        else{
            document.getElementById("title").innerText = data["message"];
        }
    })
    .catch(error => console.log('error:',error));
});
