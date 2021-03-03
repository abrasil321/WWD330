const commentList =[ 
    {
        name: 'Wonderful',
        date: new Date(),
        content: "I loved my experience at Denanda Falls."
    },
    {
        name: 'I loved it!',
        date: new Date(),
        content: "I loved my experience at Teton Canyon."
    },
    {
        name: 'Great Hike',
        date: new Date(),
        content: "I loved my experience at Bechler Falls."
    }
];

export default class CommentClass {
  
    comments(){
      return commentList;
    }
  
    generateHTML(){
        let displayComments = "";
        for(let i = 0; i < this.comments().length; i++){
            let comments = this.comments();
            let comment = comments[i];
            displayComments +=`<div id="displayComment">
                                    <h2>${comment.name}</h2>
                                    <p>${comment.content}</p>
                                    <p>${comment.date}</p>
                                    <hr>
                                 </div>`;
        }
        return displayComments;
    }
};