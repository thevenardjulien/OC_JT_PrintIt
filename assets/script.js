const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsDiv = document.querySelector(".dots");
const carousel = document.querySelector(".carousel");

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  // ,
  // {
  //   image: "slide2.jpg",
  //   tagLine:
  //     "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  // },
  // {
  //   image: "slide3.jpg",
  //   tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  // },
  // {
  //   image: "slide4.png",
  //   tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  // },
];

// Generate slides

slides.forEach((element) => {
  let slide = document.createElement("div");
  slide.classList.add("slide");
  let slideImg = document.createElement("img");
  slideImg.src = `./assets/images/slideshow/${element.image}`;
  slideImg.alt = element.image;
  let slideTagLine = document.createElement("p");
  slideTagLine.innerHTML = element.tagLine;
  slide.appendChild(slideImg);
  slide.appendChild(slideTagLine);
  carousel.appendChild(slide);
});

// <img
//   class="banner-img"
//   src="./assets/images/slideshow/slide1.jpg"
//   alt="Banner Print-it"
// />
// <p>Impressions tous formats <span>en boutique et en ligne</span></p>

// Arrows

arrowLeft.addEventListener("click", () => {
  console.log("Arrow left");
});
arrowRight.addEventListener("click", () => {
  console.log("Arrow Right");
});

// Bullet points

for (let i = 0; i < slides.length; i++) {
  const bullet = document.createElement("span");
  bullet.classList.add("dot");
  dotsDiv.appendChild(bullet);
}
