
function getAllQuestions(){
    let output = '';
    let token = localStorage.getItem("token");

    fetch('http://127.0.0.1:5000/api/v1/questions',{
        method:"GET",
        headers: {"Content-Type":"application/json",'x-access-token': token}
    })
    .then((response)=>response.json())
    .then((data)=>{
        for(let i=0;i<data.AllQueries.length;i++){
            let question = data.AllQueries[i]['question'];
            let title = data.AllQueries[i]['title'];
            let question_id = data.AllQueries[i]['question_id'];
            output +=`<div class= "all"><h2><a onclick="setQuestionId(${question_id})">${title}</a></h2>
                      <p>${question}</p> </div>`
                     
            //output +=`<li><a href="#" id="quest">${question}</a></li>`
            //console.log(data.AllQueries[i]['question']);
        }
        document.getElementById('qlist').innerHTML = output

});
}
function setQuestionId(id){
    localStorage.setItem("question_id", id);
    window.location.replace("myquestions.html")
}