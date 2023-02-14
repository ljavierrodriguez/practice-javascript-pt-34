/* 

for(iterador; condicion; incremento){
    sentencias
}

for( indice in coleccion){
    sentencias
}

for( valor of coleccion){
    sentencias
}

while(condicion){
    sentencias
}

do {
    sentencias
} while(condicion)


*/
//      1               2               4
for (let contador = 1; contador <= 10; contador++) {
    console.log(contador); // 3
}
// 1 2 3 4 2 3 4

// array of strings
let nombres = ["Hugo", "Paco", "Luis"];

// array of objects
let students = [
    { name: 'Hugo' },
    { name: 'Paco' },
    { name: 'Luis' }
]

console.log("Using for:")
for (let indice = 0; indice < nombres.length; indice++) {
    console.log(nombres[indice]);
}

console.log("Using for in:")
for (let indice in nombres) {
    console.log(nombres[indice]);
}

console.log("Using for of:")
for (let nombre of nombres) {
    console.log(nombre);
}

console.log("Using for-of in students:")
for (let student of students) {
    console.log(student);
}

console.log("Using for-in in students:")
for (let indice in students) {
    console.log(students[indice].name);
}

// While
let num = 1;
while (num <= 10) {
    console.log(num);
    num += 1;
}

let indice = 0;
while (indice < nombres.length) {
    console.log(nombres[indice]);
    indice++;
}

indice = 0;
while (indice < students.length) {
    //console.log(students[indice].name);
    console.log(students[indice]['name']);
    indice++;
}

num = 1;
do {
    console.log(num);
    num++;
} while (num === 2);

let option = 'salir';

/* do {
    console.log('ingrese una opcion');
    console.log('1. comprar pan');
    console.log('2. salir');
    switch(option){
        case 1: option = true;
            break;
        case 2: option = false;
            break;
    }
} while(option !== false) */

let matriz = [
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
]

for (let indice in matriz) {
    console.log(matriz[indice]); // [?, ?, ?]
    for (let subindice in matriz[indice]) {
        console.log(matriz[indice][subindice]) // ?
    }
}


let matriz_cubica = [
    [
        [1, 2, 3]
    ],
    [
        [4, 5, 6]
    ],
    [
        [7, 8, 9]
    ]
]

for (let x = 0; x < matriz_cubica.length; x++){
    for(let y = 0; y < matriz_cubica[x].length; y++){
        for(let z = 0; z < matriz_cubica[x][y].length; z++){
            console.log(matriz_cubica[x][y][z]);
        }
    }
}


let names = ['Hugo', 'Paco', 'Luis'];
let lastnames = ['Smith', 'Doe', 'Wilson'];
let middlenames = ['Jr.', 'M.', 'A.'];

for (let x = 0; x < names.length; x++){
    for(let y = 0; y < middlenames.length; y++){
        for(let z = 0; z < lastnames.length; z++){
            console.log(names[x]+" "+middlenames[y]+" "+lastnames[z]);
        }
    }
}