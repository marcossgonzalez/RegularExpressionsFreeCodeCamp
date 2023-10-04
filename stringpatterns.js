//-----------------------------------Correspondências de padrões de string iniciais---------------------
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result1 = calRegex.test(rickyAndCal);
//--------------------------------------------------
/*Você pode pesquisar o final das strings usando o cifrão $ no final do regex.
EX: let storyRegex = /story$/;
*/
//--------------------------------------------------
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result2 = lastRegex.test(caboose);
//--------------------------------------------------
/*A classe de caracteres mais próxima em JavaScript que corresponde ao alfabeto é \w. 
Este atalho é igual a [A-Za-z0-9_]. Esta classe de caracteres corresponde a 
letras maiúsculas e minúsculas, além de números. 
Observe que esta classe de caracteres também inclui o caractere sublinhado (_).*/
//--------------------------------------------------
let quoteSample1 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result3 = quoteSample1.match(alphabetRegexV2).length;
//--------------------------------------------------
/*Você pode procurar o oposto de \w com \W. Observe que o 
padrão oposto usa uma letra maiúscula. Este atalho é igual a [^A-Za-z0-9_].*/
//--------------------------------------------------
let quoteSample2 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result4 = quoteSample2.match(nonAlphabetRegex).length;
//--------------------------------------------------
/*O atalho para procurar caracteres numéricos é \d, com d minúsculo. 
Isto é igual à classe de caracteres [0-9], 
que procura um único caractere de qualquer número entre zero e nove.*/
//--------------------------------------------------
let movieName1 = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result5 = movieName1.match(numRegex).length;
//--------------------------------------------------
/*O atalho para procurar caracteres que não sejam dígitos é \D. 
Isso é igual à classe de caracteres [^0-9], 
que procura um único caractere que não seja um número entre zero e nove.*/
//--------------------------------------------------
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result6 = movieName.match(noNumRegex).length;
//--------------------------------------------------
let username = "JackOfAllTrades";
let userCheck = /^([a-zA-Z]{2,})+(\d*$)|^[a-zA-Z]([0-9]{2,})$/i; // Change this line
let result = userCheck.test(username);