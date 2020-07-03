//////////////////////////////////////////
// Add all Javascript code to this file.
/////////////////////////////////////////

const fetch = require('node-fetch');


// fetch('https://content.guardianapis.com/sections?api-key=75007ceb-094c-44a0-a82f-a42caef144c6')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// });




// fetch('https://hacker-news.firebaseio.com/v0/item/23705495.json?print=pretty')
let arr = 12345;
let story = `https://hacker-news.firebaseio.com/v0/item/${arr}.json?print=pretty`
console.log(story);

fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
.then(res => res.json())
.then(data => {
    let arr = []
    for(i=0; i < 2; i++){
        arr.push(data[i]);
        // for(x = o; x < 5; x++){

        }
    }
    
    
});


// [ 23705495, 23714875, 23719816, 23718278, 23717756 ]