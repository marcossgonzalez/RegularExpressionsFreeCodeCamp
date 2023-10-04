//-----------------------------------Correspondências de padrões de string iniciais---------------------
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
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
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result3 = quoteSample.match(alphabetRegexV2).length;
//--------------------------------------------------
