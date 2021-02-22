const div = document.getElementsByTagName("div");
let count = 0;
for(let i = 0; i < div.length; i++){
    div[i].style.border = "black 2px solid";
    div[i].style.padding = "5%";
    div[i].addEventListener("click", () => {
        if(count == 0){
            div[i].innerHTML = '<i class="fa fa-circle-o"></i>';
            div[i].style.fontSize = "400%"
            div[i].style.padding = " 1.15% 2.1%";
            count = 1;
        }else if(count == 1){
            div[i].innerHTML = '<i class="fa fa-close"></i>';
            div[i].style.fontSize = "400%"
            div[i].style.padding = " 1.15% 2.3%";
            count = 0;
        }
    })
}
