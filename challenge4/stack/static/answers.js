
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
            let answer = data.AllQueries[i]['answer'];
            //let question_id = data.AllQueries[i]['question_id'];
            output +=`<div id= "answered"><h2>${question})</h2>
                      <p>${answer}</p> </div>`
                     
            //output +=`<li><a href="#" id="quest">${question}</a></li>`
            //console.log(data.AllQueries[i]['question']);
        }
        document.getElementById('answered').innerHTML = output

});
}
