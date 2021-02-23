import {populateTodo} from './ls.js'

function dispTodo(){
    let displaying = ""
    let id = ""
    let content = ""

    populateTodo().forEach(function(o){
        id = o.id
        content = o.content
        for(let i = 0; i < 4; i++){
            displaying += "<div id='displayTodo1'> "
            displaying += "<div id='checkbox'> </div>"
            displaying += content[i] + " "
            displaying += "at " + id[i] 
            displaying += "<div id='deletebox'> <i class='material-icons'>delete</i> </div>"
            displaying += "</div> <br> "
        }
        document.getElementById("displayTodo").innerHTML = displaying;
    })   
  
}

dispTodo()


