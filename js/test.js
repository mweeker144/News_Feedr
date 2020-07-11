const fetch = require('node-fetch');


// 8972179


// fetch('https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// });

fetch('http://hn.algolia.com/api/v1/items/23802678')
      .then(res => res.json())
      .then(data => {
          let results = data
          console.log(results);
            })
            .catch(err => alert(`We ran into this error: ${err}`));

// fetch('http://hn.algolia.com/api/v1/search?query=sports&tags=story')
//       .then(res => res.json())
//       .then(data => {
//           let results = data.hits.slice(0, 4);
//           console.log(results[0]);
//             })
//             .catch(err => alert(`We ran into this error: ${err}`));