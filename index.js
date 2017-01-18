var books = [
{
  title: 'CSS: The Definitive Guide',
  author: 'Eric Meyer',
  link: 'http://shop.oreilly.com/product/0636920012726.do',
  type: 'css'
},
{
  title: 'CSS Development with CSS3',
  author: 'Zachary Kingston',
  link: 'http://shop.oreilly.com/product/0636920057970.do',
  type: 'css'
},
{
  title: 'You Don\'t Know JS: Up & Going',
  author: 'Kyle Simpson',
  link: 'http://shop.oreilly.com/product/0636920039303.do',
  type: 'js'
},
{
  title: 'Programming JavaScript Applications',
  author: 'Eric Elliott',
  link: 'http://shop.oreilly.com/product/0636920033141.do',
  type: 'js'
},
{
  title: 'Modern JavaScript',
  author: 'unknown',
  link: 'http://www.oreilly.com/web-platform/free/modern-javascript.csp',
  type: 'js'
},
{
  title: 'Modern Warfare',
  author: 'Activision',
  link: 'http://www.call-of.com',
  type: 'fps'
},
{
title: 'La Vie De Luke',
author: 'Luke himself',
link: 'http://www.luke-Skywalker.com',
type: 'autobiographie'
}
] ;

//pour donner du style au body
var page = document.querySelector("body");

//création du container qui contiendra la liste
var containerElt = document.createElement("div");
page.appendChild(containerElt);

//compteur de la fonction image
var j = 1;

function afficherListe () {

//boucle qui va permettre de parcourir le tableau d'objets
for (var i in books) {

  //création d'une div qui englobera l'image et le contenu textuel
  var rowContent = document.createElement("div");
  rowContent.className = "row-style";
  //création de l'image d'illustration
  var imageElt = document.createElement("img");
  //création de la liste UL
  var listeUlElt = document.createElement("ul");
  listeUlElt.className = "js";
  //création des éléments LI de la liste UL
  var titleElt = document.createElement("li");
  titleElt.textContent = "Titre : " + books[i].title;
  var authorElt = document.createElement("li");
  authorElt.textContent = "Auteur : " + books[i].author;
  var linkElt = document.createElement("li");
  linkElt.textContent = "Lien : " + books[i].link;
  var typeElt = document.createElement("li");
  typeElt.textContent = "Type : " + books[i].type;

  //déclenchement de la fonction pour afficher les images
  images (imageElt);

  //rattachement des LI à Ul
  listeUlElt.appendChild(titleElt);
  listeUlElt.appendChild(authorElt);
  listeUlElt.appendChild(linkElt);
  listeUlElt.appendChild(typeElt);
  rowContent.appendChild(imageElt);
  rowContent.appendChild(listeUlElt);

  //rattachement de UL remplie de LI au DOM
  containerElt.appendChild(rowContent);
  }
};

function images (image) {
    image.src = "images/image" + j + ".jpg";
    j++;
};

//appel de la fonction pour afficher la liste
afficherListe();

//stock dans une variable toutes les UL
var tableListeUlElt = document.querySelectorAll("ul");
//stock toutes les images
var tableImages = document.querySelectorAll("img");
//stock les lignes de contenu
var tableLigne = document.getElementsByClassName("row-style");

//fonction qui va déclencher du CSS sur la liste
function decoList () {

  for (var i in books) {
    tableListeUlElt[i].style.listStyleType = "none";
    tableListeUlElt[i].style.margin = "50px auto";
    tableListeUlElt[i].style.borderBottom = "solid black 1px";
    tableListeUlElt[i].style.padding = "10px";
    tableListeUlElt[i].style.width = "80%";

    tableImages[i].style.width = "100px";
    tableImages[i].style.height = "150px";
    tableImages[i].style.border = "black 1px solid";

    tableLigne[i].style.display = "flex";
  }
  //containerElt.style.border = "black 2px solid";
  containerElt.style.margin = "50px auto";
  //page.style.backgroundColor = "rgb(0,152,251)";
}

decoList();

  var containerButtonElt = document.createElement("div");
  var bouton1Elt = document.createElement("button");
  bouton1Elt.textContent = "JavaScript";
  containerButtonElt.appendChild(bouton1Elt);
  containerElt.appendChild(containerButtonElt);

bouton1Elt.addEventListener("click", function (objet) {
  if (objet.type === "js") {
    objet.className = "js";
  }
});
