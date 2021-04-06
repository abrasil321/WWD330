import createIntro from "./intro.js"

const introPage = new createIntro();
window.addEventListener("load", ()=>{
    introPage.appendElements();
})