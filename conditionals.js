/* 

if(condition){
    sentences
}

if(condition){
    sentences
} else { // else es opcional
    sentences
}

if(condition){
    sentences
} else if (condition){
    sentences
} else if (condition){
    sentences
} else {
    sentences
}

Operaciones de Comparacion:

=== => valor y tipo de dato
== => valor
!== => valor y tipo de dato
!= => valor
>=  => mayor igual que
<= => menor igual que
>  => mayor que
<  => menor que

Operadores Logicos: (and, or, not) => (&&, ||, !)

Operador And (&&):

true && true => true
true && false => false
false && false => false

Operador Or (||):

true || true => true
true || false => true
false || false => false

Operador Not (!):

Operador And (&&):
!true && !true => false
!true && !false => false
!false && !false => true

Operador Or (||):
!true || !true => false
!true || !false => true
!false || !false => true


Operador Ternario (? t : f)

condition ? true : false


Bloque Switch:

switch(valor){
    case: sentences;
        break;

    default: sentences;
        break;
}


*/

let a = 15;
let b = 10;
let c = 6;

let edad = 15;
let wantToDrink = true;

// if simple solo se ejecuta si la condicion es verdadera (true)
if(a > b){
    console.log("Verdadero");
}

// if else solo se ejecuta si la condicion es verdadera (true) caso contrario ejecuta las sentencias del bloque else
if(a > b){
    console.log("Verdadero");
} else {
    console.log("Falso");
}

if( a > b && a > c){
    console.log("A");
} else if(b > c){
    console.log("B");
} else {
    console.log("C");
}


/* if(edad > 18 && wantToDrink === true){
    console.log("go to drink");
} else {
    console.log("came back in " + (18 - edad) + " years");
} */

/* 
function letDrink(edad){
    if(edad > 18 && wantToDrink === true){
        console.log("go to drink");
    } else {
        console.log("came back in " + (18 - edad) + " years");
    }
}
 */

function letDrink(edad){
    /* 
    if(!(edad > 18)) return "come back in " + (18 - edad) + " years";
    console.log("Go to Drink");
    return "Great";
    */

    return edad > 18 ? "Go to Drink. Greate!!!" : "come back in " + (18 - edad) + " years";

}

console.log(letDrink(edad));

function esMayor(a, b, c){
    
    /* if( a > b && a > c){
        return "A";
    } else if(b > c){
        return "B";
    } else {
        return "C";
    } */
   
    return a > b && a > c ? "A" : b > c ? "B" : "C";
}

console.log(esMayor(a, b, c));

/* function opciones(valor){
    let resultado = ""
    switch(valor){
        case 1:
            resultado = "Hugo";
            break;
        case 2:
            resultado = "Paco";
            break;
        case 3:
            resultado = "Luis";
            break;
        default: 
            resultado = "Opcion no valida";
            break
    }

    return resultado;
} */


function opciones(valor){
    switch(valor){
        case 1: return "Hugo";
        case 2: return "Paco";
        case 3: return "Luis";
        default: return "Opcion no valida";
    }
}

console.log(opciones(10))
console.log(opciones(2))
console.log(opciones(3))
console.log(opciones(4))
