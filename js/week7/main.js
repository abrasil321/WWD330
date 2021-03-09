import hikes from './hikes.js'

const Hike = new hikes("main", "div");
window.addEventListener("load", ()=>{
    Hike.generateHTML();
});



    