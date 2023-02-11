/* 

String
Number
Boolean
Undefined

Object:
    Null
    Literal Object
    Array

function

Definir Variables: var, let y const

*/


let name = "Luis J."; // string => string
let lastname = 'Rodriguez O.'; // string => string
//let fullname = name + " " + lastname; // string => string
let fullname = `Bienvenido, ${name} ${lastname}`; // string => string


let age = 41; // int => number
let grade = -10; // int => number
let amount = 10.45; // float => number


let active = true; // verdadero => boolean
let show = false; // falso => boolean


let address; // undefined => undefined

let action = null; // null => object

let person = {
    name: '',
    lastname: '',
    age: 0,
    eat: function(){},
    run: function(){}
}


let datos = [true, "Luis", 10, {name: 'luis'}, undefined, function(a, b){ return a + b}];

console.log(typeof(datos));
console.log(typeof(datos[5]));

let student = {
    name: 'alejandro',
    lastname: 'leon',
    fullname: function(){
        return `${name} ${lastname}`
    }
}

let nombres = ["Hugo", "Paco", "Luis"];


let students = [
    {
        name: 'Hugo',
        lastname: 'leon',
        fullname: function(){
            return `${name} ${lastname}`
        }
    },
    {
        name: 'Paco',
        lastname: 'leon',
        fullname: function(){
            return `${name} ${lastname}`
        }
    },
    {
        name: 'Luis',
        lastname: 'leon',
        fullname: function(){
            return `${name} ${lastname}`
        }
    }
]
