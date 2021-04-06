import * as quiz from "./quiz.js"

export default class create {
    constructor(){
        this.h1 = document.createElement("h1");
        this.homePage = document.createElement("button");
        this.myDiv = document.createElement("div");
        this.add = document.createElement("button");
        this.done = document.createElement("button");
        this.originalDiv = document.getElementsByTagName("div");
    }

    innerElements(){
        this.h1.innerHTML = "Create Your Quiz";
        this.homePage.innerHTML = '<i id="home" class="fa fa-home"></i>';
        this.myDiv.innerHTML = `Enter a question <input name="question" type="text" size="70"><br>
                                Option 1 <input name="option1" type="text"><br>
                                Option 2 <input name="option2" type="text"><br>
                                Option 3 <input name="option3" type="text"><br>
                                Option 4 <input name="option4" type="text"><br>
                                `;
        this.add.innerHTML = "&#43;";
        this.done.innerHTML = "&#10003; Done";
    }

    createStyle(){
        // Title
        this.h1.style.fontSize = "350%";
        this.h1.style.fontFamily = "Chalkduster, fantasy";
        this.h1.style.textAlign = "center";
        this.h1.style.background = "rgba(45, 1, 77, 0.95)";
        this.h1.style.color = "white";
        this.h1.style.padding = "1%";
        this.h1.style.width = "103%";
        // Home button
        this.homePage.style.position = "absolute";
        this.homePage.style.left = "1%";
        this.homePage.style.top = "1%";
        this.homePage.style.borderRadius = "10%";
        this.homePage.style.backgroundColor = "rgb(194, 193, 193)";
        this.homePage.style.fontSize = "200%";
        // Questions div
        this.myDiv.style.display = "flex";
        this.myDiv.style.flexDirection = "column";
        this.myDiv.style.background = "linear-gradient(97deg, rgb(138,43,226, 0.95), rgb(75,0,130, 0.95))";
        this.myDiv.style.margin = "2%";
        this.myDiv.style.marginBottom = "10%";
        this.myDiv.style.padding = "2%";
        this.myDiv.style.fontSize = "130%";
        this.myDiv.style.fontWeight = "bold";
        this.myDiv.style.width = "fit-content";
        this.myDiv.style.border = "solid";
        // Add button
        this.add.style.fontSize = "300%";
        this.add.style.color = "white";
        this.add.style.backgroundColor = "rgb(39, 39, 155)";
        this.add.style.borderColor = "rgb(1, 111, 161)";
        this.add.style.borderRadius = "10%";
        this.add.style.width = "5%";
        this.add.style.marginLeft = "20%";
        this.add.style.marginRight = "20%";
        this.add.style.position = "fixed";
        this.add.style.bottom = "1%";
        // Done Button
        this.done.style.position = "fixed";
        this.done.style.right = "1%";
        this.done.style.bottom = "1%";
        this.done.style.marginTop = "10%";
        this.done.style.fontSize = "larger";
        this.done.style.backgroundColor = "rgb(1, 80, 1)";
        this.done.style.borderColor = "rgb(1, 80, 1)";
        this.done.style.color = "white";
        this.done.style.fontWeight = "bold";
        
    }

    getQuiz(){
        const newQuiz = new quiz.default().appendelements();
        return newQuiz;
    }

    btnHandle(){
        this.homePage.addEventListener('click', ()=>{
            window.location.reload();
        })
        this.add.addEventListener('click', ()=>{
            this.myDiv.innerHTML += `<br><br>Enter a question <input name="question" type="text" size="70"><br>
                                        Option 1 <input name="option1" type="text"><br>
                                        Option 2 <input name="option2" type="text"><br>
                                        Option 3 <input name="option3" type="text"><br>
                                        Option 4 <input name="option4" type="text"><br>
                                    `;
            
        })
        this.done.addEventListener('click', ()=>{
            this.getQuiz();
        })
    }

    appendElements(){
        this.innerElements();
        this.btnHandle()
        this.createStyle();
        this.originalDiv[0].appendChild(this.h1);
        this.originalDiv[0].appendChild(this.homePage);
        this.originalDiv[0].appendChild(this.myDiv);
        this.originalDiv[0].appendChild(this.add);
        this.originalDiv[0].appendChild(this.done);
    }

}