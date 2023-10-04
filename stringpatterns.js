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
let result7 = userCheck.test(username);
/*Você pode pesquisar espaços em branco usando \s, 
que é um s minúsculo. Esse padrão não corresponde apenas a 
espaços em branco, mas também a caracteres de retorno de carro, 
tabulação, feed de formulário e nova linha. 
Você pode pensar nisso como semelhante à classe de personagem [\r\t\f\n\v].*/
//--------------------------------------------------
let sample2 = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result8 = sample2.match(countWhiteSpace).length;
//--------------------------------------------------
/*Procure por espaços que não sejam em branco usando '\S', que é um s maiúsculo. 
Este padrão não corresponderá a espaços em branco, retorno de carro, tabulação, 
feed de formulário e caracteres de nova linha. 
Você pode pensar que é semelhante à classe de personagem [^ \r\t\f\n\v].*/
//--------------------------------------------------
let sample3 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result9 = sample3.match(countNonWhiteSpace).length;
//--------------------------------------------------
/*Você pode especificar o número inferior e superior de padrões com especificadores 
de quantidade. Os especificadores de quantidade são usados com chaves ({ e }). 
Você coloca dois números entre as chaves - para o número inferior e superior de padrões.*/
//--------------------------------------------------
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/g; // Change this line
let result10 = ohRegex.test(ohStr);
//--------------------------------------------------
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/gi; // Change this line
let result11 = haRegex.test(haStr);
//--------------------------------------------------
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/gi; // Change this line
let result12 = timRegex.test(timStr);
//--------------------------------------------------
let favWord = "favorite";
let favRegex = /favou?rite/gi; // Change this line
let result = favRegex.test(favWord);
//--------------------------------------------------

//--------------------------------------------------