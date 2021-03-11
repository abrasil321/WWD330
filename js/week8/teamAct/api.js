async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: undefined // body data type must match "Content-Type" header
    });

    return response.text(); // parses JSON response into native JavaScript objects
}


function display(){
  postData('https://swapi.dev/api/people/', { answer: 42 })
  .then(data => {
    document.getElementById("display").innerHTML = data;
  });
}



