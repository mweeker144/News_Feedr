// //////////////////////////////////////////
// // Add all Javascript code to this file.
// /////////////////////////////////////////



// //Modules and API Keys
// import {num} from './test'

// const fetch = require('node-fetch');
const newObjArr = require('./redditapi');
console.log('here', newObjArr);
const apiKeys = require('./keys');
const newsApiKey = apiKeys.newsapi;
const hackerNews = apiKeys.hackerNews;
const eventRegistry = apiKeys.eventRegistry;
const allKeys = [newsApiKey, hackerNews, eventRegistry];

const main = document.querySelector('#main');
let articles = document.querySelectorAll('.article');
const sources = document.querySelectorAll('nav ul li');
sources[1].innerHTML = '<li><a href="#">Reddit</a></li>';
sources[2].innerHTML = '<li><a href="#">HackerNews</a></li>';
sources[3].innerHTML = '<li><a href="#">NewsAPI</a></li>';



// // reddit payload:
const redditStories =
[
    {
      title: 'TIL Christian-based company In-N-Out Burger not only pr...',
      thumbnail: 'https://b.thumbs.redditmedia.com/wkvIsqU1F4eH2mAJgoADFDjGXNRWjQ9KTqPT-Fvl34E.jpg',
      category: 'todayilearned',
      score: 11250
    },
    {
      title: 'Can we please talk about how wasteful beyond burger pac...',
      thumbnail: 'https://b.thumbs.redditmedia.com/TcSXh7dUjwqjQVu2FXxfwS91gTQ0TkGEOjGFFIZgNYM.jpg',
      category: 'ZeroWaste',
      score: 12293
    },
    {
      title: 'Heal Thy Burgers...',
      thumbnail: 'https://a.thumbs.redditmedia.com/tEmu1MmWnsMo8kuEL65MNWOwCOVT1iPjyUaDzX4K8S4.jpg',
      category: 'memes',
      score: 52230
    },
    {
      title: 'Burger joint in town....',
      thumbnail: 'https://b.thumbs.redditmedia.com/pyRe8UVjyJrmihhw2B5DvBEh5sElYaEOXrbNTswqshU.jpg',
      category: 'coolguides',
      score: 52876
    }
  ];

  let popUp = document.querySelector('#popUp');
  let allImgs = document.querySelectorAll('.article .featuredImage');
  let allTitleCategories = document.querySelectorAll('.article .articleContent');
  let metrics = document.querySelectorAll('.article .impressions');

  for(i = 0; i < redditStories.length; i++) {
    allImgs[i].innerHTML = `<img src="${redditStories[i].thumbnail}" alt="" />`
    allTitleCategories[i].innerHTML = `<a href="#"><h3>${redditStories[i].title}</h3></a><h6>${redditStories[i].category}</h6>`
    metrics[i].innerText = `${redditStories[i].score}`
  }


  let articleOne = document.querySelector('.article');
  articleOne.addEventListener('click', function(){
    // alert('You clicked!!');
    popUp.classList.toggle('hidden');
  });









































// // fetch('https://content.guardianapis.com/sections?api-key=75007ceb-094c-44a0-a82f-a42caef144c6')
// // .then(res => res.json())
// // .then(data => {
// //     console.log(data);
// // });


// // fetch('https://hacker-news.firebaseio.com/v0/item/23705495.json?print=pretty')
// // let arr = 12345;
// // let story = `https://hacker-news.firebaseio.com/v0/item/${arr}.json?print=pretty`
// // console.log(story);



// // fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
// // .then(res => res.json())
// // .then(data => {
// //     let arr = []
// //     for(i=0; i < 2; i++){
// //         arr.push(data[i]);
// //         // for(x = o; x < 5; x++){
// //     // }
// //     }
    
    
// // });
// // fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
// // .then(res => res.json())
// // .then(data => {
// //     let arr = []
// //     for(i=0; i < 2; i++){
// //         arr.push(data[i]);
// //         // for(x = o; x < 5; x++){
// //     // }
// //     }
    
    
// // });

// // fetch('http://eventregistry.org/api/v1/article/getArticles')
// // .then(res => res.json())
// // .then(data => {
// //     console.log(data);
// // })


// // var url = 'http://newsapi.org/v2/top-headlines?' +
// //           'country=us&' +
// //           'apiKey=280dcf8c9d8841c682dc999e50a7707b';
// // var req = new Request(url);
// // fetch(req)
// //     .then(function(response) {
// //         console.log(response.json());
// //     })


// // fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=280dcf8c9d8841c682dc999e50a7707b')
// // .then(res => res.json())
// // .then(data => {
// //     console.log(data);
// // })

// // [ 23705495, 23714875, 23719816, 23718278, 23717756 ]

// // fetch('http://www.reddit.com/search.json?q=burger')
// // .then(res => res.json())
// // .then(data => {
// //     console.log(data.data.children[0]);
// // })