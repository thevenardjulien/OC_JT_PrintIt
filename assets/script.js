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
