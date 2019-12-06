// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Obtaining cards container to append the cards
const cardsContainer = document.querySelector('.cards-container');

//creating a new card for every article
function createCard(data){

    //create elements
    const cardEl = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorSpan = document.createElement('span');

    //Add classes 
    cardEl.classList.add('card');
    author.classList.add('author');
    headline.classList.add('headline');
    imageContainer.classList.add('img-container');
    
    //attribute
    image.src = data.authorPhoto;

    //add data
    headline.textContent = data.headline;
    authorSpan.textContent = data.authorName;
    
    //append
    cardEl.appendChild(headline);
    cardEl.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(authorSpan);

    return cardEl;

}

//gettting article data and appending it

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    return (response.data.articles);
})
.then(obj=> {
   Object.keys(obj).forEach(item => {
       obj[item].forEach(article => {
          cardsContainer.appendChild(createCard(article));
       })
   })

})

