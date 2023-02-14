/* 

Abstraccion
Encapsulamiento
Herencia
Polimorfismo

*/

let fecha = new Date();
console.log(fecha);

class Persona {
    nombre = "";
    apellido = "";
    genero = "";
    edad = "";

    constructor(nombre = "", apellido = "", genero = "", edad = ""){
        this.nombre = nombre;
        this.apellido = apellido
        this.genero = genero
        this.edad = edad
    }

    comer = function(){}
    dormir = function(){}

    correr(){

    }
    saludo(){
        return this.nombre + " " + this.apellido;
    }
}

let p1 = new Persona("John", "Doe", "Male", "Unknown"); // instancia o objecto de tipo Persona
let p2 = new Persona("Jane", "Doe", "Female", "Unknown"); // instancia o objecto de tipo Persona
let p3 = new Persona("Alejandro", "Carrillo", "Male", "27");


/* p1.nombre = 'John';
p1.apellido = 'Doe';

p2.nombre = 'Jane';
p2.apellido = 'Doe'; */



console.log(p1.saludo());
console.log(p2.saludo());
console.log(p3.saludo());



/* 
let persona = {
    nombre: '',
    apellido: '',
    genero: '',
    edad: ''
}

let persona2 = {
    nombre: '',
    apellido: '',
    genero: '',
    edad: ''
} 
*/

class Student extends Persona {

    facultad = "";
    grado = "";

    constructor(nombre = "", apellido = "", genero="", edad="", facultad="", grado = ""){
        super(nombre, apellido)
        this.facultad = facultad;
        this.grado = grado;
    }

    verNotas(){
        return "Ver notas";
    }

    saludo2(){
        return "Bachiller: " + this.nombre + " " + this.apellido; 
    }
}

let s1 = new Student("Luis", "Rodriguez", "", "", "Ingenieria", "2a");

console.log(s1.saludo())
console.log(s1.verNotas())
console.log(s1.saludo2())



class Figura {
    constructor(lado){
        this.lado = lado;
    }

    getArea(){
        return;
    }
}

class Cuadrado extends Figura {
    getArea(){
        return this.lado * this.lado
    }
}

class Triagulo extends Figura {
    constructor(base, altura, lado = 0){
        super(lado);
        this.base = base;
        this.altura = altura;
    }
    getArea(){
        return (this.base * this.altura) / 2
    }
}