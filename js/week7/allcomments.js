const commentList =[ 
    {
        name: 'Wonderful',
        date: "3/3/2021, 10:59:19 PM",
        content: "I loved my experience at Denanda Falls."
    },
    {
        name: 'I loved it!',
        date: "2/28/2021, 08:42:54 AM",
        content: "I loved my experience at Teton Canyon."
    },
    {
        name: 'Great Hike',
        date: "2/21/2021, 03:00:29 PM",
        content: "I loved my experience at Bechler Falls."
    }
];


export default class CommentClass {
  
    comments(){
        return commentList;
    }

    localStorage(){
        let storageClass = ls.display();
        return storageClass;
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