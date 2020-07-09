// export const num = 47;

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

  console.log(`print this variable ${redditStories[0].title}`);

 let newHtml = `<img src="${redditStories[0].thumbnail}" alt="" />`
 console.log(newHtml);



 let allImgs = document.querySelectorAll('.article .featuredImage');
  // allImgs[0].innerHTML = `<img src="${redditStories[0].thumbnail}" alt="" />`
  // allImgs[1].innerHTML = `<img src="${redditStories[1].thumbnail}" alt="" />`
  // allImgs[2].innerHTML = `<img src="${redditStories[2].thumbnail}" alt="" />`
  // allImgs[3].innerHTML = `<img src="${redditStories[3].thumbnail}" alt="" />`

  for(i = 0; i < redditStories.length; i++) {
    allImgs[i].innerHTML = `<img src="${redditStories[i].thumbnail}" alt="" />`
  }

  let allTitleCategories = document.querySelectorAll('.article .articleContent');
  // allTitleCategories[0].innerHTML = `<a href="#"><h3>${redditStories[0].title}</h3></a><h6>${redditStories[0].category}</h6>`
  // allTitleCategories[1].innerHTML = `<a href="#"><h3>${redditStories[1].title}</h3></a><h6>${redditStories[1].category}</h6>`
  // allTitleCategories[2].innerHTML = `<a href="#"><h3>${redditStories[2].title}</h3></a><h6>${redditStories[2].category}</h6>`
  // allTitleCategories[3].innerHTML = `<a href="#"><h3>${redditStories[3].title}</h3></a><h6>${redditStories[3].category}</h6>`

  let metrics = document.querySelectorAll('.article .impressions');
  // metrics[0].innerText = `${redditStories[0].score}`;
  // metrics[1].innerText = `${redditStories[1].score}`;
  // metrics[2].innerText = `${redditStories[2].score}`;
  // metrics[3].innerText = `${redditStories[3].score}`;
