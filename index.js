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

var container = document.getElementById('container');


for(i = 0; i < books.length; i++) {
  var card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);


  for(var prop in books[i]) {

    var p = document.createElement('p');
    card.appendChild(p);
    p.textContent = books[i][prop];

    if (prop === 'author') {
      p.innerHTML = 'By ' + books[i].author;
    }

    if (prop === 'link') {
      p.innerHTML = '<a href = ' + books[i].link + '>Link</a>';
    }

    if (prop === 'type') {
      p.setAttribute('style', 'display: none');
    }

  }
 }
