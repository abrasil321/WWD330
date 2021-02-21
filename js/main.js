

function generator1(){
    const links = [
        {
          label: "Week1 notes",
          url: "https://github.com/abrasil321/WWD330"
        }
      ];
    
    links.forEach(element => {
        label = element.label;
        url = element.url;

        document.getElementById("links").innerHTML = "<li><a href='" + url + "'>" + label + "</a></li><br>";
    });
}

//