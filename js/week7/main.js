import hikes from './hikes.js'

const Hike = new hikes("main", "div");
console.log(Hike);
window.addEventListener("load", ()=>{
    Hike.generateHTML();
});


    