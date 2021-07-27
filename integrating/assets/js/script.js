var container = document.querySelector('#gifContainer');

function displayGif(gifData) {
  var article = document.createElement('article')
  article.classList.add('card')

  var gif = document.createElement('img')
  gif.setAttribute('src', gifData?.images?.fixed_height?.url)
  gif.setAttribute('alt', gifData?.title)

  var author = document.createElement('a')
  author.setAttribute('href', gifData?.user?.profile_url)
  author.setAttribute('target', '_blank')
  author.textContent = 'Made by ' + gifData?.username;

  var link = document.createElement('a')
  link.setAttribute('href', gifData?.url)
  link.setAttribute('target', '_blank')
  link.textContent = 'See on Giphy!'
  article.append(gif, author, link);
  container.append(article);
}

function getGpihyData(term = 'dogs') {
  var key = '21fdcacl68aypKOUNa7JaHMbnkOLR7Z7';
  var endPoint = 'https://api.giphy.com/v1/gifs/search?limit=1&api_key=' + key + "&q=" + term;
  fetch(endPoint)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    displayGif(data.data[0]);
  })
}

getGpihyData();

document.querySelector('#search').addEventListener('submit', function (event) {
  event.preventDefault();
  getGpihyData(document.querySelector('input').value.trim());
})