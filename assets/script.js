const carousel = document.querySelector(".carousel");
const carouselDots = document.querySelector(".carousel__dots");
const carouselItems = document.querySelector(".carousel__items");

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Generating items

slides.forEach((slide) => {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel__item");
  const slideImage = document.createElement("img");
  slideImage.src = `./assets/images/slideshow/${slide.image}`;
  slideImage.alt = `${slide.image}`;
  const slideTagLine = document.createElement("p");
  slideTagLine.innerHTML = `${slide.tagLine}`;
  carouselItem.append(slideImage);
  carouselItem.append(slideTagLine);
  carouselItems.append(carouselItem);
});

// Logic

let carouselItem = document.querySelectorAll(".carousel__item");
let arrowLeft = document.querySelector(".carousel__arrows-left");
let arrowRight = document.querySelector(".carousel__arrows-right");

// Define first active item
let firstActive = document.querySelector(".carousel__item:first-child");
firstActive.classList.add("active");

let state = 0;
// console.log(state);

let nbrItem = carouselItem.length;

function removeActiveItem() {
  for (i = 0; i < nbrItem; i++) {
    carouselItem[i].classList.remove("active");
  }
}

function next() {
  state++;
  if (state >= nbrItem) {
    state = 0;
  }
  removeActiveItem();
  carouselItem[state].classList.add("active");
}

function prev() {
  state--;
  if (state < 0) {
    state = nbrItem - 1;
  }
  removeActiveItem();
  carouselItem[state].classList.add("active");
}

arrowRight.addEventListener("click", () => {
  next();
});

arrowLeft.addEventListener("click", () => {
  prev();
});

// Automatic scroll

setInterval(() => {
  state++;
  if (state >= nbrItem) {
    state = 0;
  }
  removeActiveItem();
  carouselItem[state].classList.add("active");
}, 5000);

// Keydown scroll

let keydown = "";

document.addEventListener("keydown", (e) => {
  keydown = e.key;
  if (keydown == "ArrowRight") {
    next();
  } else if (keydown == "ArrowLeft") {
    prev();
  }
});
