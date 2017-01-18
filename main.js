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
}
];

var booksList = document.querySelector('.booksList');
for (var i = 0; i < books.length; i++) {
  booksList.innerHTML = booksList.innerHTML + '<ul class="main '+ books[i].type +'-type"><li class="title">'+ books[i].title +'</li><li class="author">'+ books[i].author +'</li><li class="type">'+books[i].type+'</li><a href="'+books[i].link+'"><button>En savoir plus</button></a></ul>';
}
var js = document.querySelector('.js'), css = document.querySelector('.css');
var filterbtn = document.querySelector('.filterbtn'),

cssType = document.querySelectorAll('.css-type'),
jsType = document.querySelectorAll('.js-type');
console.log(jsType);

filterbtn.onclick = function(){
if (js.checked && !css.checked) {
  for (var i = 0; i < cssType.length; i++) {
    cssType[i].style.display = 'none';
  }for (var i = 0; i < jsType.length; i++) {
    jsType[i].style.display = 'block';
  }document.querySelector('.nothing').style.display = 'none';
}else if (!js.checked && css.checked) {
  for (var i = 0; i < jsType.length; i++) {
    jsType[i].style.display = 'none';
  }for (var i = 0; i < cssType.length; i++) {
    cssType[i].style.display = 'block';
  }document.querySelector('.nothing').style.display = 'none';
}else if (!js.checked && !css.checked){
    document.querySelector('.nothing').style.display = 'block';
    for (var i = 0; i < jsType.length; i++) {
      jsType[i].style.display = 'none';
    }for (var i = 0; i < cssType.length; i++) {
      cssType[i].style.display = 'none';
    }
}else if (js.checked && css.checked) {
  for (var i = 0; i < jsType.length; i++) {
    jsType[i].style.display = 'block';
  }for (var i = 0; i < cssType.length; i++) {
    cssType[i].style.display = 'block';
  }
  document.querySelector('.nothing').style.display = 'none';
}
}
