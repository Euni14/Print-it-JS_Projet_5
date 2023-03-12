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
// etape 3 compter nombres d'images
// servir pour les boucles
const slidesLength = slides.length;

// etape 2
////////// teste des event listener sur les flêches===================

/*const arrowleft = document.getElementById("arrowleft");
arrowleft.addEventListener("click", function(){
	alert("gauche");
});
const arrowright = document.getElementById("arrowright");
arrowright.addEventListener("click",function(){
	alert("droite");
});*/

//etape-3 ajout les bullet points=====================================
const dotscontainer = document.getElementById("dotscontainer");
for (let i = 0; i < slidesLength; i++) {
  let spantemporary = document.createElement("span"); //créer un span pour représenter les bullet
  if (i === 0) {
    spantemporary.classList.add("dot");
    spantemporary.classList.add("dot_selected");
  } else {
    spantemporary.classList.add("dot");
  }
  dotscontainer.appendChild(spantemporary); // ajouter comme enfant pour être dans le div dots
}

//étape-4 on change le bullet point actif au suivant===================
/*let globalImageIndex = 0;
const banner = document.getElementById("bannerimg");
const arrowleft = document.getElementById("arrowleft");
arrowleft.addEventListener("click", function () {
  globalImageIndex = globalImageIndex - 1;

  banner.src = "./assets/images/slideshow/" + slides[globalImageIndex].image;
  let collection = document.getElementById("dotscontainer").children;
  for (let i = 0; i < collection.length; i++) {
    if (i === globalImageIndex) {
      collection[i].classList.add("dot_selected");
    } else {
      collection[i].classList.remove("dot_selected");
    }
  }
  let titre = document.getElementById("titre");
  titre.innerHTML = slides[globalImageIndex].tagLine;
});

const arrowright = document.getElementById("arrowright");
arrowright.addEventListener("click", function () {
  globalImageIndex = globalImageIndex + 1;

  banner.src = "./assets/images/slideshow/" + slides[globalImageIndex].image;
  let collection = document.getElementById("dotscontainer").children;
  for (let i = 0; i < collection.length; i++) {
    if (i === globalImageIndex) {
      collection[i].classList.add("dot_selected");
    } else {
      collection[i].classList.remove("dot_selected");
    }
  }
  let titre = document.getElementById("titre");
  titre.innerHTML = slides[globalImageIndex].tagLine;
});*/

//étape-5 correction des derniers bugs================================
//carrousel tourne en boucle indéfiniment
let globalImageIndex = 0;
const banner = document.getElementById("bannerimg");
const arrowleft = document.getElementById("arrowleft");
arrowleft.addEventListener("click", function () {
  globalImageIndex = globalImageIndex - 1;
  if (globalImageIndex === -1) {
    globalImageIndex = slidesLength - 1;
  }

  banner.src = "./assets/images/slideshow/" + slides[globalImageIndex].image;
  let collection = document.getElementById("dotscontainer").children;
  for (let i = 0; i < collection.length; i++) {
    if (i === globalImageIndex) {
      collection[i].classList.add("dot_selected");
    } else {
      collection[i].classList.remove("dot_selected");
    }
  }
  let titre = document.getElementById("titre");
  titre.innerHTML = slides[globalImageIndex].tagLine;
});

const arrowright = document.getElementById("arrowright");
arrowright.addEventListener("click", function () {
  globalImageIndex = globalImageIndex + 1;

  if (globalImageIndex === slidesLength) {
    globalImageIndex = 0;
  }

  banner.src = "./assets/images/slideshow/" + slides[globalImageIndex].image;
  let collection = document.getElementById("dotscontainer").children;
  for (let i = 0; i < collection.length; i++) {
    if (i === globalImageIndex) {
      collection[i].classList.add("dot_selected");
    } else {
      collection[i].classList.remove("dot_selected");
    }
  }
  let titre = document.getElementById("titre");
  titre.innerHTML = slides[globalImageIndex].tagLine;
});
