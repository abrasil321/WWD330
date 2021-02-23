export function populateTodo(){
    let newtodo= []
    let newtime = []
    newtodo.push(document.getElementById("newtodo").value)
    newtime.push(document.getElementById("newtime").value)
    localStorage.setItem("lastname", "Smith");

    // todo = { id : timestamp, content: string, completed: bool }
    todo = {id: newtime, content: newtodo, completed: false}

    let toDoList = [todo]
    return toDoList
}


