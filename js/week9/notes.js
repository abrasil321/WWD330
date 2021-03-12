function notes(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    document.cookie = 'input1 = ' + input1; 
    document.cookie = 'input2 = ' + input2;
    document.cookie = 'input3 = ' + input3;

    let display = "";
    const cookies = document.cookie.split("; ");
    for (crumb of cookies){
        const [key,value] = crumb.split("="); 
        display += `The value of ${key} is ${value}<br>`;
    }
    
    document.getElementById("display").innerHTML = display; 

    const youAreHere = (position) => { 
        console.log(`Latitude: ${position.coords.latitude}, 
                        Longitude: ${position.coords.longitude}`); 
                    }
    navigator.geolocation.getCurrentPosition(youAreHere);
    // const expiryDate = new Date();
    // const inAMinute = expiryDate.getTime() + 1000 * 60;
    // expiryDate.setTime(inAMinute);

}


function rotate() {
    const squareElement = document.getElementById('square'); 
    let angle = 0;
    angle = (angle + 2)%360;
    for(let i = 0; i<4; i++){
        angle += (angle + 2)%360
    } 
    squareElement.style.transform = `rotate(${angle}deg)`;
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);


// function handlePermission() {
//     navigator.permissions.query({name:'geolocation'}).then(function(result) {
//       if (result.state == 'granted') {
//         report(result.state);
//         geoBtn.style.display = 'none';
//       } else if (result.state == 'prompt') {
//         report(result.state);
//         geoBtn.style.display = 'none';
//         navigator.geolocation.getCurrentPosition(revealPosition,positionDenied,geoSettings);
//       } else if (result.state == 'denied') {
//         report(result.state);
//         geoBtn.style.display = 'inline';
//       }
//       result.onchange = function() {
//         report(result.state);
//       }
//     });
//   }
  
//   function report(state) {
//     console.log('Permission ' + state);
//   }
  
//   handlePermission();