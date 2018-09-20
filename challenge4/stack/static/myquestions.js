function getMyQuestions(){
    let output = '';
    let token = localStorage.getItem("token");

    fetch('http://127.0.0.1:5000/api/v1/allquestions',{
        method:"GET",
        headers: {"Content-Type":"application/json",'x-access-token': token}
    })
    .then((response)=>response.json())
    .then((data)=>{
        
        for(let i=0;i<data.questions.length;i++) {
            let question = data.questions[i]['question'];
            let title = data.questions[i]['title'];
            //let question_id = data.questions[i]['question_id'];
            output +=`<div class="all" id="par"><h2>${title}</h2>
                      <p>${question}</p> </div>`
                     
            //output +=`<li><a href="#" id="quest">${question}</a></li>`
            //console.log(data).AllQueries[i]['question']);
        }
        document.getElementById('qlist').innerHTML = output;

});
}
function setQuestionId(id){
    localStorage.setItem("question_id", id);
   // window.location.replace("answered.html")
}