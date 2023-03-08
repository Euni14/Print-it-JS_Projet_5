const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/* teste des event listener sur les flêches*/
var arrowleft = document.getElementById("arrowleft");
arrowleft.addEventListener("click",function(){
	alert("gauche");
});
var arrowright = document.getElementById("arrowright");
arrowright.addEventListener("click",function(){
	alert("droite");
});
/*les bullet points et
différencier le point qui signale la diapositive en cours de visionnage*/
let dotscontainer = document.getElementById("dotscontainer");
for (var i = 1; i <= slides.length; i++) {
   var spantemporary = document.createElement("span");
   if(i==1)	{
	spantemporary.classList.add("dot");
	spantemporary.classList.add("dot_selected");	
   }
   else{
	spantemporary.classList.add("dot");
   }
   dotscontainer.appendChild(spantemporary);
}