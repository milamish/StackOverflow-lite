

let route = "http://127.0.0.1:5000/api/v1/";
let id = localStorage.getItem("question_id");
let ID = localStorage.getItem("answer_ID");
let token = localStorage.getItem("token");

function edit(id,ID,answer,){
    
    modal.style.display="block";
    document.getElementById("myAnswer").innerText = "";
    document.getElementById("one").innerText = "";
    document.getElementById("edit").innerHTML = `
    <form name="modify"><br><p id="id"></p><br>
    <textarea maxlength="20" rows ="1" cols = "33" name ="title">${answer}</textarea><br>
    <button class="view" name="save" id = "submit">Edit </button><br></form>`;
    document.getElementById("submit").addEventListener("click",
    function modifyEntry(event){
        event.preventDefault();
        let url = route+'questions/'+id+'/answers/' + ID;
        let answer = document.forms["modify"]["answer"].value;
        let data = {answer:answer}
        fetch(url, {
            method:"PUT", headers: {"Content-Type":"application/json", "x-access-token":token},
            body:JSON.stringify(data)
        })
        .then((response)=>response.json())
        .then((output)=>{
            if (output["message"] == "Edited successfully"){
                window.location.replace("answered.html");
            } 
            else{
                document.getElementById("id").innerHTML = output["message"];
            }
        })
        .catch((error)=>console.log(error))
    });
}
function setAnswerId(ID){
    localStorage.setItem("answer_id", ID);
   window.location.replace("answered.html")
}