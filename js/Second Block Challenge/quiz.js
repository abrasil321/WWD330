export default class quiz{
    constructor(){
        this.originalDiv = document.getElementsByTagName("div");
        this.question = document.getElementsByName("question");
        this.option1 = document.getElementById("option1").value;
        this.option2 = document.getElementById("option2").value;
        this.option3 = document.getElementById("option3").value;
        this.option4 = document.getElementById("option4").value;
    }

    appendelements(){
        this.body.innerHTML = "<div></div>";
        this.originalDiv[0].innerHTML = this.question[1];
        this.originalDiv[0].style.backgroundColor = "white";
    }


}