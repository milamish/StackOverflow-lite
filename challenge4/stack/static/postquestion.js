let route = "http://127.0.0.1:5000/api/v1/";
let token = localStorage.getItem("token");

document.getElementById("qbtn").addEventListener("click",
function postQuestion(event){
    event.preventDefault();
    let url = route+"questions"
    let title = document.getElementById("qtitle").value;
    let question = document.getElementById("textarea").value;
    
    let data = {title:title, question:question};                    
    fetch(url, {
        method:"POST",headers:{"Content-Type":"application/json", 'x-access-token': token},
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data) => {
        console.log(data);

        if(data["message"]==="succesfully registered"){ 
            window.location.replace("questions.html");  
        }
        else{
           document.getElementById("question").innerText =  data.message;
           console.log(data["message"]);
       }
    })
    .catch(error => console.log('error:',error));
});
