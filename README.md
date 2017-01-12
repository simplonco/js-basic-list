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


### 1. Afficher les données ci-dessus sous forme de liste dans une page html :

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
  link: 'http://shop.oreilly.com/product/0636920039303.do'
  type: 'js'
},
{
  title: 'Programming JavaScript Applications',
  author: 'Eric Elliott',
  link: 'http://shop.oreilly.com/product/0636920033141.do'
  type: 'js'
},
{
  title: 'Modern JavaScript',
  author: 'unknown',
  link: 'http://www.oreilly.com/web-platform/free/modern-javascript.csp'
  type: 'js'
}
] ;
```

NB : n'oubliez pas de rajouter du style css.

### 2. Ajouter 2 boutons intitulés JS et CSS dans la page html qui permettent de filtrer, respectivement, les livres de type CSS et JS.
