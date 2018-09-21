function postAnswer(){
    let id = localStorage.getItem("question_id");;
    let token = localStorage.getItem("token");
    let route = "http://127.0.0.1:5000/api/v1/"; 

    document.getElementById("pbtn").addEventListener("click",
function postQuestion(event){
    event.preventDefault();
    let url = route+'questions/'+id+'/answers'
    let answer = document.getElementById("textarea").value;
    
    let data = {answer:answer};                    
    fetch(url, {
        method:"POST",headers:{"Content-Type":"application/json", 'x-access-token': token},
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data) => {
        console.log(data);

        if(data["message"]==="answer posted"){ 
            window.location.replace("answered.html");  
        }
        else{
           document.getElementById("answers").innerText = data["message"];
           console.log(data["message"]);
       }
    })
    .catch(error => console.log('error:',error));
});
}