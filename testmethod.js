//------------------------------
/*
JavaScript tem várias maneiras de usar expressões regulares. Uma maneira de testar uma regex é usando o método .test(). 
O método .test() pega o regex, aplica-o a uma string (que é colocada entre parênteses) e 
retorna verdadeiro ou falso se o seu padrão encontrar algo ou não.*/
//------------------------------
let myString1 = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString);
//------------------------------
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);
//------------------------------
/*
Você pode pesquisar vários padrões usando a alternância ou o operador OR: |.*/
//------------------------------
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);
//------------------------------
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp|FreeCOdeCamp|FrEeCoDeCamp/i; // Change this line
let result4 = fccRegex.test(myString);
/*
Você pode usá-lo anexando-o ao regex. Um exemplo de uso deste sinalizador 
é /ignorecase/i. Este regex pode corresponder às strings ignorecase, igNoreCase e IgnoreCase*/
//------------------------------Extract Matches------------------------------
/*Se um padrão existe ou não dentro de uma string você também 
pode extrair as correspondências reais encontradas com o método .match().
Ex:
"Hello, World!".match(/Hello/);

ou 

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

*/
//------------------------------
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result5 = extractStr.match(codingRegex);
//------------------------------Encontre mais do que a primeira entrada -----------------------
/* Para pesquisar ou extrair um padrão mais de uma vez, 
você pode usar o sinalizador de pesquisa global: g.
Ex: /Hello/g; */
//------------------------------

//------------------------------