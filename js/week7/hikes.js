import comments from "./allcomments.js"

const hikeList = [
    {
      name: 'Bechler Falls',
      imgSrc: 'hike1.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '3 miles',
      difficulty: 'Easy',
      description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
      directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },
    {
      name: 'Teton Canyon',
      imgSrc: 'hike2.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '3 miles',
      difficulty: 'Easy',
      description: 'Beautiful short (or long) hike through Teton Canyon.',
      directions:
        'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
    },
    {
      name: 'Denanda Falls',
      imgSrc: 'hike3.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '7 miles',
      difficulty: 'Moderate',
      description:
        'Beautiful hike through Bechler meadows river to Denanda Falls',
      directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
    }
  ];

export default class hikeClass {
  
  constructor(main, div){
    this.myTable = document.getElementsByTagName(main);
    this.myDiv = document.createElement(div); 
  }

  hike(){
    return hikeList;
  }

  comments(){
    const commentClass =  new comments();
    return commentClass.generateHTML();
  }

  generateHTML(){
    for(let i = 0; i < this.hike().length; i++){

      let hikes = this.hike();
      let hike = hikes[i];
      this.myDiv.innerHTML +=  `<div id="title"> ${hike.name} </div>
                  <div id="hikeBody">
                    <img src="${hike.imgSrc}" alt="${hike.imgAlt}">
                    <ul>
                        <li>Distance: ${hike.distance}</li>
                        <li>Level: ${hike.difficulty}</li>
                    <ul>
                  </div> `;
    }
    this.myDiv.innerHTML += `<br><div id="comment">
                              <textarea cols="50" rows="6" placeholder="Enter comment here..."></textarea>
                              <button type="button">Submit</button>
                             </div>`;

    this.myDiv.innerHTML += this.comments();
    

    this.myTable[0].appendChild(this.myDiv);
  }
};

