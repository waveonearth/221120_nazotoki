function end() {
    var answerText = document.getElementById("answerText").value;

    if(answerText == "ポリスクラス"){
        location.href = "./3_answer.html";
    } else{
        alert("答えが間違っています");
    }
}