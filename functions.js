 /* 
 
 Funciones de Nombre:

 function funcName(){
    sentences
 }

 Funciones Anonimas:

 let varName = function(){

 }

Funciones de Flecha:

const funcName = () => {
    sentences
}
 
*/



//saludo(); // llamada a la funcion

console.log(saludo());

nombreCompleto();
nombreCompleto();
nombreCompleto();
nombreCompleto();


const saludo2 = function(){
    console.log("Hola de una funcion declarativa");
}

saludo2();


// Hoisting
function saludo(){ // declarando la funcion 
    console.log("Hola desde una funcion");
}

function nombreCompleto(nombre = 'John', apellido="Doe"){
    console.log(nombre + " " + apellido);
}

nombreCompleto("Luis");


const saludo3 = () => console.log("Hola Mundo desde una Arrow Function");

saludo3();


const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

const multiplicar = function(a = 10, b){
    return a * b;
}

function operacion(func, num1, num2){
    return func(num1, num2);
}

let resultado = operacion(sumar, 10, 5);
console.log(resultado);

let resultado2 = operacion(restar, 10, 5);
console.log(resultado2);

let resultado3 = operacion(multiplicar, 10, 40);
console.log(resultado3);


function valores(b, c, a = 10){
    console.log(a, b, c);
}

valores(10, 5, 30);
