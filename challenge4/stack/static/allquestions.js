
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
            output +=`<div class= "all"><h2><a id="par"onclick="setQuestionId(${question_id})">${title}</a></h2>
                      <p id="para">${question}</p> </div>`
                     
            //output +=`<li><a href="#" id="quest">${question}</a></li>`
            //console.log(data).AllQueries[i]['question']);
        }
        document.getElementById('qlist').innerHTML = output;

});
}
function setQuestionId(id){
    localStorage.setItem("question_id", id);
   window.location.replace("answered.html")
}
function getAllanswers(){
    let id = localStorage.getItem("question_id");;
    let token = localStorage.getItem("token");
    
    fetch('http://127.0.0.1:5000/api/v1/questions/' + id,{
        method:"GET",
        headers: {"Content-Type":"application/json",'x-access-token': token}
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        let output = '';
        {
           
            //let question_id = data.AllQueries[i]['question_id'];
            for(let i=0;i<data.questions.length;i++){
            output +=`<div class="answers">
                      <p id="queans">${data.questions[i]['answer']}</p> </div>`;
            }
            document.getElementById('queslist').innerHTML = output;
            //output +=`<li><a href="#" id="quest">${question}</a></li>`
            //console.log(data.AllQueries[i]['question']);
        }
        if(data["message"]==="answers are"){ 
            window.location.replace("answered.html");  
        }
        if (data == ['data']){
            window.location.replace("login.html");
        }
        else{
            document.getElementById("err").innerText = data["message"];
        }
        
       
        //document.getElementById('queslist').innerHTML = output;
        //window.location.replace('answered.html')

});
}
function myQueries() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myquery");
    filter = input.value.toUpperCase();
    ul = document.getElementById("qlist");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}