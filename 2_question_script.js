function end() {
    var answerText = document.getElementById("answerText").value;

    if(answerText == "こぐれがにぎる"){
        location.href = "./2_answer.html";
    } else{
        alert("答えが間違っています");
    }
}