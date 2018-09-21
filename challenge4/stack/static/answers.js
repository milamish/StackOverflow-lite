
function getAllanswers(){
    let output = '';
    let token = localStorage.getItem("token");
 
   

    fetch('http://127.0.0.1:5000/api/v1/questions/' + question_id,{
        method:"GET",
        headers: {"Content-Type":"application/json",'x-access-token': token}
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        for(let i=0;i<data.questions.length;i++){
            let question = data.questions[i]['question'];
            let answer = data.questions[i]['answer'];
            let answer_id = data.questions[i]['answer_id'];
            let question_id = data.AllQueries[i]['question_id'];
            output +=`<div id= "answered"><h2>${question}</a></h2>
                      <h1><a id="queans"onclick="setAnswerId(${answer_id})">${answer}</a></h1><hr>
                      <input type="submit"value="delete question" id= "dltBTn" onclick="(${answer_id})"></div>`;
                     
            //output +=`<li><a href="#" id="quest">${question}</a></li>`
            //console.log(data.AllQueries[i]['question']);
        }
        document.getElementById('answered').innerHTML = output

});
}

function setAnswerId(ID){
    localStorage.setItem("answer_id", ID);
   window.location.replace("answered.html")
}


function modifyQuestion(){
    let id = localStorage.getItem("question_id");
    let token = localStorage.getItem("token");
    fetch('http://127.0.0.1:5000/api/v1/questions/' + id+'/answer/'+ID,{
        method:"PUT",
        headers: {"Content-Type":"application/json",'x-access-token': token}
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        if(data["message"]==="succesfully modified"){ 
            window.location.replace("answered.html");  
        }
        if (data == ['data']){
            window.location.replace("login.html");
        }
        else{
            document.getElementById("succesful").innerText = data["message"];
        }
        
       
        //document.getElementById('queslist').innerHTML = output;
        //window.location.replace('answered.html')

});
}