# js-basic-list

## Préambules

Liste de la doc utile pour les (l') exercices de la journée

## Consignes

Consignes globales : 
- contraintes et bonnes pratiques en relation avec les exercices de la journée
- Si tu as une question, demande à ton voisin de droite
- Autrement ton voisin de gauche
- ...

## Enoncés d'exercice


### 1. Afficher les données ci-dessous sous forme de liste dans une page html :

Chaque element de la liste HTML doit comprendre :

* un titre (title)
* un auteur (author)
* un lien (link)
* un type (type)

```javascript
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
] ;
```

Pour reussir cet exercice, vous devez :

 * boucler sur les elements du tableau javascript
 * créer un element HTML parent pour chaque element du tableau javascript (rappel: document.createElement('li') par exemple)
 * créer pour chaque propriétés (title, author, link, type) de chaque element du tableau, un element HTML (rappel: document.createElement('p') par exemple)
 * Ajouter les elements HTML correspondant à chaque propriétés (title, author, link, type) à l'element HTML parent (celui créé auparavant)
 * Au final, vous devez ajouter (appendChild) chaque element parent à un element UL existant dans le HTML

NB : n'oubliez pas de rajouter du style css.

### 2. Ajouter 2 boutons intitulés JS et CSS dans la page html qui permettent de filtrer, respectivement, les livres de type CSS et JS.
