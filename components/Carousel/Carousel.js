/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function createCarousel(){
  //create elements
  const carouselEl = document.createElement('div');
  const leftBtn = document.createElement('div');
  const image1 = document.createElement('img');
  const image2 = document.createElement('img');
  const image3 = document.createElement('img');
  const image4 = document.createElement('img');
  const rightBtn = document.createElement('div');
  //add classes
  carouselEl.classList.add('carousel');
  
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');
  //add image data
  image1.src = "./assets/carousel/mountains.jpeg"
  image2.src = "./assets/carousel/computer.jpeg"
  image3.src = "./assets/carousel/trees.jpeg"
  image4.src = "./assets/carousel/turntable.jpeg"
  //add content
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";

  //append
  carouselEl.appendChild(leftBtn);
  carouselEl.appendChild(image1);
  carouselEl.appendChild(image2);
  carouselEl.appendChild(image3);
  carouselEl.appendChild(image4);
  carouselEl.appendChild(rightBtn);

  return carouselEl
}
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(createCarousel());

//Obtain images

const images = document.querySelectorAll('.carousel img');
imagesLink = [];
images.forEach(image => {
  imagesLink.push(image.src);
  
})

currentImageIndex = 0;
const imgTag = document.querySelector('.carousel img');
imgTag.src = imagesLink[currentImageIndex]
imgTag.style.display = 'block';


//left button image handler
const leftBtn = document.querySelector('.left-button')
const rightBtn = document.querySelector('.right-button')

leftBtn.addEventListener('click',() => {
  
   
  if(currentImageIndex === 0){
    
    currentImageIndex = imagesLink.length-1;
    imgTag.src = imagesLink[currentImageIndex];
  } else {
    currentImageIndex -= 1;
  }
  imgTag.src = imagesLink[currentImageIndex];
  
})

rightBtn.addEventListener('click',() => {
  
   
  if(currentImageIndex === 3){
    currentImageIndex = 0;
    imgTag.src = imagesLink[currentImageIndex];
  } else {
    currentImageIndex += 1;
  }
  imgTag.src = imagesLink[currentImageIndex];
  
})

