var books = [{
  title: 'CSS: The Definitive Guide',
  author: 'Eric Meyer',
  link: 'http://shop.oreilly.com/product/0636920012726.do',
  type: 'css',
  illustrationLink: 'http://akamaicovers.oreilly.com/images/9780596527334/cat.gif'
}, {
  title: 'CSS Development with CSS3',
  author: 'Zachary Kingston',
  link: 'http://shop.oreilly.com/product/0636920057970.do',
  type: 'css',
  illustrationLink: 'https://www.packtpub.com/sites/default/files/bookretailers/CSS%20Development%20with%20CSS3_500x617.jpg'
}, {
  title: 'You Don\'t Know JS: Up & Going',
  author: 'Kyle Simpson',
  link: 'http://shop.oreilly.com/product/0636920039303.do',
  type: 'js',
  illustrationLink: 'https://images-na.ssl-images-amazon.com/images/I/41L18FvA5rL._SX331_BO1,204,203,200_.jpg'
}, {
  title: 'Programming JavaScript Applications',
  author: 'Eric Elliott',
  link: 'http://shop.oreilly.com/product/0636920033141.do',
  type: 'js',
  illustrationLink: 'http://orm-other.s3.amazonaws.com/progjsappssplash/cover.jpg'
}, {
  title: 'Modern JavaScript',
  author: 'unknown',
  link: 'http://www.oreilly.com/web-platform/free/modern-javascript.csp',
  type: 'js',
  illustrationLink: 'https://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg'
}];


var cardsContainer = document.getElementById('card-container');
var btnJs = document.getElementById('btn-js');
var btnCss = document.getElementById('btn-css');
var btnAll = document.getElementById('btn-all');
var jsClass = document.getElementsByClassName('js');
var cssClass = document.getElementsByClassName('css');


for (var i = 0; i < books.length; i++) {
  card = document.createElement('div');
  card.classList.add('card');
  if (books[i].type === 'js') {
    card.classList.add('js');
  } else {
    card.classList.add('css');
  }
  card.innerHTML = "<img src='" + books[i].illustrationLink + "'/><h3>" + books[i].title + "</h3>" + "<p>" + books[i].author + "</p><a href='" + books[i].link + "'>Lire le livre</a>";
  cardsContainer.appendChild(card);
}

btnJs.addEventListener('click', function() {
  for (var i = 0; i < jsClass.length; i++) {
    jsClass[i].style.display = "block";
  }
  for (var j = 0; j < cssClass.length; j++) {
    cssClass[j].style.display = "none";
  }
});

btnCss.addEventListener('click', function() {
  for (var i = 0; i < jsClass.length; i++) {
    jsClass[i].style.display = "none";
  }
  for (var j = 0; j < cssClass.length; j++) {
    cssClass[j].style.display = "block";
  }
});

btnAll.addEventListener('click', function() {
  for (var i = 0; i < jsClass.length; i++) {
    jsClass[i].style.display = "block";
  }
  for (var j = 0; j < cssClass.length; j++) {
    cssClass[j].style.display = "block";
  }
});
