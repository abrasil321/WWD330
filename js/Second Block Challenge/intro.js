import * as create from "./create.js"

export default class createIntro {

    constructor(){
        this.h1 = document.createElement("h1");
        this.div = document.createElement("div");
        this.btn = document.createElement("button");
        this.originalDiv = document.getElementsByTagName("div");
        this.body = document.body;
        this.instructions = "";              
    }

    create(){
        return new create.default();
    }

    innerElements(){
        this.instructions = `This website is designed to help you to create quizes in the most simplest way.
                            When you feel ready, click on the "START" button (at the bottom right corner).
                            After that, you will be able to add questions to your quiz. Each question will 
                            allow you to create options for the answers. The answers can either be True/False 
                            or Multiple Choice. Once you're done, click on the "DONE" button and a link will
                            be generated for you to share your quiz.`;
        this.h1.innerHTML = "Welcome to Quick Quizes";
        this.div.innerHTML = `<p id="instruc">${this.instructions}</p>`;
        this.btn.innerHTML = "START";
    }

    introStyle(){
        //Body
        this.body.style.backgroundImage = "url('./intro.jpg')";
        this.body.style.backgroundSize = "100%";
        this.body.style.backgroundAttachment = "fixed";
        this.body.style.display = "flex";
        this.body.style.flexDirection = "column";
        this.body.style.alignItems = "center";
        this.body.style.justifyContent = "center";
        //Title
        this.h1.style.fontSize = "500%";
        this.h1.style.fontFamily = "Chalkduster, fantasy";
        this.h1.style.textAlign = "center";
        this.h1.style.background = "rgba(45, 1, 77, 0.95)";
        this.h1.style.color = "white";
        this.h1.style.padding = "1%";
        //Intructions
        this.div.style.border = "solid black 1px";
        this.div.style.width = "70%";
        this.div.style.textAlign = "center";
        this.div.style.fontSize = "150%";
        this.div.style.marginLeft = "15%"
        this.div.style.marginTop = "10%";
        this.div.style.padding = "1%";
        this.div.style.background = "linear-gradient(97deg, rgb(138,43,226, 0.95), rgb(75,0,130, 0.95))";
        this.div.style.color = "white";
        //Button
        this.btn.style.position = "absolute";
        this.btn.style.right = "0";
        this.btn.style.marginTop = "10%";
        this.btn.style.marginRight = "1%";
        this.btn.style.fontSize = "larger";
        this.btn.style.borderRadius = "5%";
        this.btn.style.border = "green";
        this.btn.style.backgroundColor = "green";
        this.btn.style.color = "white";
        this.btn.style.padding = "1%";
    }

    handleButton(){
        this.btn.addEventListener("click", ()=>{
            this.body.innerHTML = "<div></div>";
            this.create().appendElements();
        })
    }

    appendElements(){
        this.innerElements();
        this.introStyle();
        this.handleButton();
        this.originalDiv[0].appendChild(this.h1);
        this.originalDiv[0].appendChild(this.div);
        this.originalDiv[0].appendChild(this.btn);
    }

}