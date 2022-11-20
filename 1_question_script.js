function end() {
    var answerText = document.getElementById("answerText").value;

    if(answerText == "食いしん坊のポチは、ソーセージ祭りが開催されている扉谷公園へ"){
        location.href = "./1_answer.html";
    } else{
        alert("答えが間違っています");
    }
}