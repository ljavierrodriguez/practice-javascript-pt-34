let persona = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};

// Primer Ejemplo de Destructuring
const { name, email } = persona;
console.log(name);
console.log(email);


function saludo({ name, address: { street, zipcode} }) {
    return name + " Address: " + street +", " + zipcode;
}

console.log(saludo(persona));



let nombres = ['Hugo', 'Paco', 'Luis'];

const [a, b, c] = nombres;

const [x, ...rest] = nombres;

console.log(x, rest);

