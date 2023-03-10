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
/* image courante*/
let globalImageIndex = 1;

/* teste des event listener sur les flêches*/

var arrowleft = document.getElementById("arrowleft");
arrowleft.addEventListener("click", function () {
  //	alert("gauche");
  /*vers la gauche, on soustrait pour avoir l'image courante*/
  globalImageIndex = globalImageIndex - 1;

  /* affiché l'image */
  let banner = document.getElementById("bannerimg");
  banner.src =
    "./assets/images/slideshow/" + slides[globalImageIndex - 1].image;

  /* mettre le bullet point à l'image*/
  let collection = document.getElementById("dotscontainer").children;
  /*Parcour les bullets points*/
  for (var i = 1; i <= collection.length; i++) {
    if (i == globalImageIndex) {
      /* Ajouter la classe dot_selected sur l'image courante*/
      collection[i - 1].classList.add("dot_selected");
    } else {
      /* supprimer la classe dot_selected les autres image*/
      collection[i - 1].classList.remove("dot_selected");
    }
  }
  /*affichage tagline */
  let title = document.getElementById("title");
  title.innerHTML = slides[globalImageIndex - 1].tagLine;
});

var arrowright = document.getElementById("arrowright");
arrowright.addEventListener("click", function () {
  //	alert("droite");
  /*vers la droite, on additionne pour avoir l'image courante*/
  globalImageIndex = globalImageIndex + 1;

  /* affiché l'image */
  let banner = document.getElementById("bannerimg");
  banner.src =
    "./assets/images/slideshow/" + slides[globalImageIndex - 1].image;

  /* mettre le bullet point à l'image*/
  let collection = document.getElementById("dotscontainer").children;
  /*Parcour les bullets points*/
  for (var i = 1; i <= collection.length; i++) {
    if (i == globalImageIndex) {
      /* Ajouter la classe dot_selected sur l'image courante*/
      collection[i - 1].classList.add("dot_selected");
    } else {
      /* supprimer la classe dot_selected les autres image*/
      collection[i - 1].classList.remove("dot_selected");
    }
  }
  /*affichage tagline */
  let title = document.getElementById("title");
  title.innerHTML = slides[globalImageIndex - 1].tagLine;
});
/*les bullet points et
différencier le point qui signale la diapositive en cours de visionnage*/
let dotscontainer = document.getElementById("dotscontainer");
for (var i = 1; i <= slides.length; i++) {
  var spantemporary = document.createElement("span");
  if (i == 1) {
    spantemporary.classList.add("dot");
    spantemporary.classList.add("dot_selected");
  } else {
    spantemporary.classList.add("dot");
  }
  dotscontainer.appendChild(spantemporary);
}
