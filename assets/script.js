const carousel = document.querySelector(".carousel");
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

// Generating dots

const carouselDots = document.querySelector(".carousel__dots");

slides.forEach((slide) => {
  const dot = document.createElement("div");
  dot.classList.add("carousel__dot");
  carouselDots.append(dot);
});

// Logic

let carouselItem = document.querySelectorAll(".carousel__item");
let carouselDot = document.querySelectorAll(".carousel__dot");
let arrowLeft = document.querySelector(".carousel__arrows-left");
let arrowRight = document.querySelector(".carousel__arrows-right");

// Define first active item & dot

let firstActive = document.querySelector(".carousel__item:first-child");
firstActive.classList.add("active");

let firstSelectedDot = document.querySelector(".carousel__dot:first-child");
firstSelectedDot.classList.add("dot_selected");

let state = 0;

let nbrItem = carouselItem.length;
let nbrDot = carouselDot.length;

function removeActiveItem() {
  carouselItem[state].classList.remove("active");
}

function removeSelectedDot() {
  carouselDot[state].classList.remove("dot_selected");
}

function next() {
  removeActiveItem();
  removeSelectedDot();
  state = (state + 1) % nbrItem;
  console.log(state);
  carouselItem[state].classList.add("active");
  carouselDot[state].classList.add("dot_selected");
}

function prev() {
  removeActiveItem();
  removeSelectedDot();
  state = (state - 1) % nbrItem;
  state < 0 ? (state = nbrItem - 1) : state;
  console.log(state);
  carouselItem[state].classList.add("active");
  carouselDot[state].classList.add("dot_selected");
}

arrowRight.addEventListener("click", () => {
  next();
});

arrowLeft.addEventListener("click", () => {
  prev();
});

// Automatic scroll

setInterval(() => {
  next();
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
