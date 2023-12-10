const whereAreYou = document.getElementById('where-are-you');

// Adicionando cor 
 const parent = whereAreYou.parentElement;
 parent.style.color = 'red';

 const firstChildOfChild = whereAreYou.firstElementChild;
 firstChildOfChild.innerText = 'First child of child';

 const  firstChild = parent.firstElementChild;

// Acessando atraves do where-are-you

const primeiroFilho2 = whereAreYou.previousElementSibling;

// Acessando text Attention! a partir de where-are-you

const textElement = whereAreYou.nextSibling;

 // Acesse o third-child a partir de where-are-you.
 const thirdChild = whereAreYou.nextElementSibling;

 // Acesse o third-child a partir de parent.
 const thirdChild2 = parent.lastElementChild.previousElementSibling;
