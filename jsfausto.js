var books = [{
    title: 'CSS: The Definitive Guide',
    author: 'Eric Meyer',
    link: 'http://shop.oreilly.com/product/0636920012726.do',
    type: 'css'
}, {
    title: 'CSS Development with CSS3',
    author: 'Zachary Kingston',
    link: 'http://shop.oreilly.com/product/0636920057970.do',
    type: 'css'
}, {
    title: 'You Don\'t Know JS: Up & Going',
    author: 'Kyle Simpson',
    link: 'http://shop.oreilly.com/product/0636920039303.do',
    type: 'js'
}, {
    title: 'Programming JavaScript Applications',
    author: 'Eric Elliott',
    link: 'http://shop.oreilly.com/product/0636920033141.do',
    type: 'js'
}, {
    title: 'Modern JavaScript',
    author: 'unknown',
    link: 'http://www.oreilly.com/web-platform/free/modern-javascript.csp',
    type: 'js'
}];



for (var i = 0; i < books.length; i++) {
    document.write("<div>" + "<ul> " + "<li id=title><b>Title</b>: " + books[i].title + "</li><br>" + "<li><b>Author</b>: " + books[i].author + "</li><br>" + "<li><b>Link</b>: " + books[i].link + "</li></br>" + "<li><b>Type:</b> " + books[i].type + "</li>" + "</ul>" + "</div>");
}
