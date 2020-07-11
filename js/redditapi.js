// export const redditStories = newObjArr;
const fetch = require('node-fetch');
let searchTerm = 'burger';
let sortBy = 'relevance';
let searchLimit = 4;


fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
    .then(res => res.json())
    .then(data => {
        // let objArr = [];
      let results = (data.data.children.map(data => data.data));
      let newObjArr = [{}, {}, {}, {}];
      for(i = 0; i < results.length; i++) {
        newObjArr[i].title = results[i].title.slice(0, 55) + '...';
        newObjArr[i].thumbnail = results[i].thumbnail;
        newObjArr[i].category = results[i].subreddit;
        newObjArr[i].url = 'https://www.reddit.com/' + results[i].permalink;
        newObjArr[i].score = results[i].score;
      }
      console.log(newObjArr[0]);
    })
    .catch(err => alert('Something went wrong with your news source'));