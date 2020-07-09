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
        newObjArr[i].score = results[i].score;
      }
      console.log(newObjArr);
      module.export = newObjArr;
    })
    .catch(err => console.log(err));




































// fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
//     .then(res => res.json())
//     .then(data => {
//         let objArr = [];
//       let results = (data.data.children.map(data => data.data)); 
//       console.log(results);
    //   for(i = 0; i < results.length; i++) {
    //     let title = results[i].title;
    //     objArr[i].title = title.slice(0, 55) + '...';
    //     console.log(objArr);
    //   }
    //   let title = results[0].title;
    //   let thumbnail = results[0].thumbnail;
    //   let category = results[0].subreddit;
    //   let score = results[0].score;
    //   let urlR = 'https://www.reddit.com' + results[0].permalink 
    //   obj.title = title.slice(0, 55) + '...';
    //   obj.thumbnail = thumbnail;
    //   obj.category = category;
    //   obj.score = score;
    //   obj.link= urlR;
    //   console.log(obj);
    // Test console.logs
    //   console.log(title);
    //   console.log(thumbnail);
    //   console.log(category);
    //   console.log(score);
    //   console.log(urlR);
    // })
    // .catch(err => console.log(err));


    // const newsObject = {
    //     title: "",
    //     imagePath: "",
    //     content: "",
    //     stat: "",
    // }



    