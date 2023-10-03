//------------------------------
/*
JavaScript tem várias maneiras de usar expressões regulares. Uma maneira de testar uma regex é usando o método .test(). 
O método .test() pega o regex, aplica-o a uma string (que é colocada entre parênteses) e 
retorna verdadeiro ou falso se o seu padrão encontrar algo ou não.*/
//------------------------------
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
//------------------------------
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);
//------------------------------
/*
Você pode pesquisar vários padrões usando a alternância ou o operador OR: |.*/
//------------------------------