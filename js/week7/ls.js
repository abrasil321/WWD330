function addComment(){

    let textInput = document.getElementById("commentContent").value;
    let title = "";
        for(let i = 0; i < 11; i++){
            title += textInput.charAt(i)
        }
    let existingDiv = document.getElementsByTagName("div");
    let myDiv = document.createElement("div"); 
    myDiv.innerHTML = `<div id="displayComment">
                            <h2>${title}...</h2>
                            <p>${textInput}</p>
                            <p>${new Date().toLocaleString()}</p>
                            <hr>
                        </div>`;
    existingDiv[0].appendChild(myDiv);
    document.getElementById("commentContent").value = "";

}