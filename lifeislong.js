const lifeRandom = document.getElementById("card-collection");
const cardContainer = document.querySelector(".container");
const ranBtn = document.querySelector('.Generate-Card')
const singleRandom = document.getElementById("single-collection");
const containerQuestions = document.querySelector('.container-Questions')
const generateQuestions = document.querySelector('.Generate-Questions')
const matchContainer = document.querySelector('.match-container')
const matchFormContainer = document.querySelector('.match-container')
const slides = document.getElementsByClassName("questionsImg");
const slidesPoems = document.getElementsByClassName("poemsImg");
const containerPoems = document.querySelector('.container-Poems')
const captionText = document.getElementById('caption')
const captionPoems = document.getElementById('captionPoems')
const restart = document.querySelector('.restart')
const newCard = document.querySelector('.newCard')
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const plusandminus = document.querySelector('.plusandminus')

////////////////////// Hidden Display
containerPoems.style.display = 'none'
generateQuestions.style.display = 'none'
containerQuestions.style.display = 'none'
matchContainer.style.display = 'none'
restart.style.display = 'none'
newCard.style.display = 'none'
plusandminus.style.display = 'none'
////////////////////// Question and Poem Form
matchFormContainer.addEventListener('submit', function (e) {
  e.preventDefault(e);
  const lifeID = document.getElementById('cardId')
  
  if (lifeID.textContent === e.target.name.value && lifeID.textContent === e.target.namePoem.value) {
    captionText.textContent = 'Correct Match'
    captionPoems.textContent = 'Correct Match'
    document.querySelector(".caption-container").style.backgroundColor = "green";
    document.querySelector(".caption-con").style.backgroundColor = "green";
    matchContainer.style.display = 'none'
    restart.style.display = 'block'
    deleteCard(lifeID)
  } else {
    document.getElementById("match-form").reset();
    captionText.textContent = 'Wrong Match'
    captionPoems.textContent = 'Wrong Match'
    document.querySelector(".caption-con").style.backgroundColor = "red";
    document.querySelector(".caption-container").style.backgroundColor = "red";

  }
})

//////////////////////////  Generate New card 
newCard.addEventListener('click', function () {
  document.querySelector('.card1').remove()
  getCard1()
  likes.textContent = 0
})


////////////////////////// Button Handler to Fetch Random Card
 ranBtn.addEventListener('click', function() {
 getCard1()
 ranBtn.style.display = 'none'
 newCard.style.display = 'block'
 plusandminus.style.display = 'block'
plus.style.backgroundColor = 'white'
minus.style.backgroundColor = 'white'



if (generateQuestions.style.display === 'none') {
    generateQuestions.style.display = 'block'
  }
 })
 generateQuestions.addEventListener('click', function (){
  containerQuestions.style.display = 'block'
  generateQuestions.style.display = 'none'
  matchContainer.style.display = 'block'
  containerPoems.style.display = 'block'
  newCard.style.display = 'none'
  plusandminus.style.display = 'none'


 })
 function getCard1() {
  fetch("http://localhost:3000/life")
  .then(function (response) {
  return response.json();
  })
  .then(function (data) {
      renderCard1(data[Math.floor(Math.random() * data.length)]);
    });
}
function renderCard1(life) {
  const singleCard = `<div class="card1">
    <h3>${life.name}</h3>
    <h2 id='cardId' style="display: none">${life.id}</h2>
    <img src=${life.gif} class="gif-avatar1" />
  </div>`;
  singleRandom.innerHTML += singleCard;
}

plus.addEventListener("click", function () {
  likes.textContent = ++likes.textContent;
});
   
minus.addEventListener("click", function () {
  likes.textContent = --likes.textContent;
})

////////////////////////// Slide Show Questions 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
////////////////////////// Slide Show Poems 
var slideInde = 1;
showSlide(slideInde);

// Next/previous controls
function plusSlidesPoem(n) {
  showSlide(slideInde += n);
}

// Thumbnail image controls
function currentSlid(n) {
  showSlide(slideInde = n);
}

function showSlide(n) {
  var i;
  if (n > slidesPoems.length) {slideInde = 1}
  if (n < 1) {slideInde = slidesPoems.length}
  for (i = 0; i < slidesPoems.length; i++) {
    slidesPoems[i].style.display = "none";
  }
  slidesPoems[slideInde-1].style.display = "block";
}

////////////////////////// Play again

restart.addEventListener('click', function () {
  window.location.reload();
})

