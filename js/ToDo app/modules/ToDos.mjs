const mydiv = document.getElementsByTagName("div");
const create = document.createElement("p");
mydiv[0].innerHTML = ` <div id="displayTodo"> 
                            <div id="check"></div> 
                            <pre>This is my task</pre> 
                            <div id="delete"> <i class="fa fa-trash"></i> </div>
                        </div>`;

const task = document.getElementsByTagName("pre");
const check = document.getElementById("check");
let count = 0;
check.addEventListener('click', () => {
    if(count == 0){
        check.style.backgroundColor = "black";
        count = 1;
        task[0].style.textDecoration = "line-through";
    }
    else if(count == 1){
        check.style.backgroundColor = "rgb(0, 168, 0)";
        count = 0;
        task[0].style.textDecoration = "none";
    }
    
})

const del = document.getElementById("delete");
del.addEventListener("click", () =>{
    if(confirm("Are you sure that you want to delete this task?")){
        mydiv[0].remove();
    }
    
})




