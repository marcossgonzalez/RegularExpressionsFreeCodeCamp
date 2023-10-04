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
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line
//------------------------------
/*O caractere curinga . corresponderá a qualquer caractere. 
O curinga também é chamado de ponto e ponto final. 
Você pode usar o caractere curinga como qualquer outro caractere na regex. 
Por exemplo, se você quiser combinar hug, huh, hut e hum, 
poderá usar a regex /hu./ para combinar todas as quatro palavras.*/
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/gi; // Change this line
let result7 = unRegex.test(exampleStr);
//------------------------------
let quoteSample2 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result8 = quoteSample.match(vowelRegex); // Change this line
//------------------------------
/*Dentro de um conjunto de caracteres, você pode definir 
um intervalo de caracteres para correspondência usando um caractere hífen: -.*/
//------------------------------
let quoteSample3 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result9 = quoteSample3.match(alphabetRegex); // Change this line
//------------------------------
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
//------------------------------

//------------------------------