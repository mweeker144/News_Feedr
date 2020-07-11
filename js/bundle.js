(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// //////////////////////////////////////////
// // Add all Javascript code to this file.
// /////////////////////////////////////////

// browserify app.js -o bundle.js
// //Modules and API Keys

const fetch = require('node-fetch');
const apiKeys = require('./keys');
const newsApiKey = apiKeys.newsapi;
const hackerNews = apiKeys.hackerNews;
const eventRegistry = apiKeys.eventRegistry;
const allKeys = [newsApiKey, hackerNews, eventRegistry];
console.log(apiKeys.newsapi);
const main = document.querySelector('#main');
let articles = document.querySelectorAll('.article');
const sources = document.querySelectorAll('nav ul li');
sources[1].innerHTML = '<li><a href="#">Reddit</a></li>';
sources[2].innerHTML = '<li><a href="#">HackerNews</a></li>';
sources[3].innerHTML = '<li><a href="#">NewsAPI</a></li>';
const allarticles = document.querySelectorAll('.article');
const popUpClose = document.querySelector('#popUp .closePopUp');
const popUpX = document.querySelector('#popUp.loader .closePopUp')

let popUp = document.querySelector('#popUp');
let allImgs = document.querySelectorAll('.article .featuredImage');
let allTitleCategories = document.querySelectorAll('.article .articleContent');
let metrics = document.querySelectorAll('.article .impressions');
let popUpTitle = document.querySelector('#popUp h1');
let popUpDescription = document.querySelector('#popUp p');
let popUpLink = document.querySelector('#popUp div a');


// Loader
setTimeout(loader, 2000);

const autoLoader = function (){
  popUp.classList.remove('hidden');
  popUpX.classList.add('hidden');
  setTimeout(loader, 2000);
};

function loader(){
  popUp.classList.add('hidden');
  popUpX.classList.remove('hidden');
}; 

document.addEventListener('DOMContentLoaded', autoLoader);

// Popup
let popUpFunc = (num, arr) => {
  allarticles[num].addEventListener('click', function(){
    popUpTitle.innerText = arr[num].title;
    popUpDescription.innerText = arr[num].description;
    popUpLink.href = arr[num].url
    popUp.classList.remove('hidden');
    popUp.classList.remove('loader');
  });
}

//Close PopUp
popUpClose.addEventListener('click', function(){
  popUp.classList.add('hidden');
  popUp.classList.add('loader');
});

// Reddit Default
let searchTerm = 'burger';
let sortBy = 'relevance';
let searchLimit = 4;
fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
.then(res => res.json())
.then(data => {
  let results = (data.data.children.map(data => data.data)); 
  let redditObjArr = [{}, {}, {}, {}];
  for(i = 0; i < results.length; i++) {
    redditObjArr[i].title = results[i].title.slice(0, 75);
    redditObjArr[i].thumbnail = results[i].thumbnail;
    redditObjArr[i].description = 'Full description available in link below.'
    redditObjArr[i].category = results[i].subreddit;
    redditObjArr[i].url = 'https://www.reddit.com/' + results[i].permalink;
    redditObjArr[i].score = results[i].score;
  }
  for(i = 0; i < redditObjArr.length; i++) {
    allImgs[i].innerHTML = `<img src="${redditObjArr[i].thumbnail}" alt="" />`
    allTitleCategories[i].innerHTML = `<a href="#"><h3>${redditObjArr[i].title}</h3></a><h6>${redditObjArr[i].category}</h6>`
    metrics[i].innerText = `${redditObjArr[i].score}`
    popUpFunc(i, redditObjArr);
  }
    });

// Reddit DropDown Click
sources[1].addEventListener('click', function(){
  autoLoader();
  let searchTerm = 'burger';
  let sortBy = 'relevance';
  let searchLimit = 4;
  fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
  .then(res => res.json())
  .then(data => {
    let results = (data.data.children.map(data => data.data)); 
    let redditObjArr = [{}, {}, {}, {}];
    for(i = 0; i < results.length; i++) {
      redditObjArr[i].title = results[i].title.slice(0, 75);
      redditObjArr[i].thumbnail = results[i].thumbnail;
      redditObjArr[i].description = 'Full description available in link below.'
      redditObjArr[i].category = results[i].subreddit;
      redditObjArr[i].url = 'https://www.reddit.com/' + results[i].permalink;
      redditObjArr[i].score = results[i].score;
    } for(i = 0; i < redditObjArr.length; i++) {
          allImgs[i].innerHTML = `<img src="${redditObjArr[i].thumbnail}" alt="" />`
          allTitleCategories[i].innerHTML = `<a href="#"><h3>${redditObjArr[i].title}</h3></a><h6>${redditObjArr[i].category}</h6>`
          metrics[i].innerText = `${redditObjArr[i].score}`
          popUpFunc(i, redditObjArr);
        }
      }) 
      .catch(err => alert(`We ran into this error: ${err}`));
    }) 
    

  // HackerNews DropDown Click
  sources[2].addEventListener('click', function(){
    autoLoader();
    fetch('http://hn.algolia.com/api/v1/search?query=sports&tags=story')
      .then(res => res.json())
      .then(data => {
          let results = data.hits.slice(0, 4);
          let hnArr = [{}, {}, {}, {}];
              for(i = 0; i < results.length; i++){
                  hnArr[i].title = results[i].title
                  hnArr[i].thumbnail = 'https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/hacker_news-512.png'
                  hnArr[i].description = 'Full description available in link below.'
                  hnArr[i].url = results[i].url
                  hnArr[i].category = 'Sports'
                  hnArr[i].score = results[i].points
              } for(i = 0; i < hnArr.length; i++) {
                allImgs[i].innerHTML = `<img src="${hnArr[i].thumbnail}" alt="" />`
                allTitleCategories[i].innerHTML = `<a href="#"><h3>${hnArr[i].title}</h3></a><h6>${hnArr[i].category}</h6>`
                metrics[i].innerText = `${hnArr[i].score}`
                popUpFunc(i, hnArr);
              }
            })
            .catch(err => alert(`We ran into this error: ${err}`));
          });

    // NewsAPI DropDown Click
      sources[3].addEventListener('click', function(){
        autoLoader();
      fetch(`https://accesscontrolalloworiginall.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKeys.newsapi}`)
        .then(res => res.json())
        .then(data => {
        let results = data.articles.slice(1, 5);
        let newsApiArr = [{}, {}, {}, {}];
          for(i = 0; i < results.length; i++){
            newsApiArr[i].title = results[i].title
            newsApiArr[i].thumbnail = results[i].urlToImage
            newsApiArr[i].description = results[i].description
            newsApiArr[i].url = results[i].url
            newsApiArr[i].category = 'New & Popular'
            newsApiArr[i].score = Math.floor(Math.random() * Math.floor(1000))
            if (newsApiArr[i].thumbnail === null) {
            newsApiArr[i].thumbnail = 'https://i0.wp.com/python.gotrained.com/wp-content/uploads/2019/08/news-api.jpg?fit=200%2C200&ssl=1'}
            if (newsApiArr[i].description === null) {
            newsApiArr[i].description = 'Article content available via the link below.'};
          } for(i = 0; i < newsApiArr.length; i++) {
              allImgs[i].innerHTML = `<img src="${newsApiArr[i].thumbnail}" alt="" />`
              allTitleCategories[i].innerHTML = `<a href="#"><h3>${newsApiArr[i].title}</h3></a><h6>${newsApiArr[i].category}</h6>`
              metrics[i].innerText = `${newsApiArr[i].score}`
              popUpFunc(i, newsApiArr);
            }
  })
  .catch(err => alert(`We ran into this error: ${err}`));
  });



},{"./keys":2,"node-fetch":3}],2:[function(require,module,exports){
module.exports={
    "newsapi": "280dcf8c9d8841c682dc999e50a7707b",
    "hackerNews": "75007ceb-094c-44a0-a82f-a42caef144c6",
    "eventRegistry": "e2c3b284-9e3c-4899-9c4a-91894b232a37"
  }
},{}],3:[function(require,module,exports){
(function (global){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
