 /* 
 
 document:

 getElementById('id'); // retorna el elemento por su ID
 getElementsByClassName('class'); // retorna una coleccion con todos los elementos que tengan la clase dada
 getElementsByTagName('tag'); // retorna una coleccion de todos los elementos con el tag / etiqueta dada
 getElementsByName('name'); // retorna una coleccion con todos los elementos que tengan el name con el valor dado

 querySelector('selectorCss'); // retorna el primer elemento encontrado segun el selector indicado
 querySelectorAll('selectorCss'); // retorna todos los elementos encontrado segun el selector indicado


 createElement('tag'); // crea un nodo html segun la etiqueta dada
 
 */

 console.log(document);

 let header = document.getElementById('header');
 console.log(header);
 header.style.fontSize = '20px';

 let logo = header.querySelector('.logo');
 console.log(logo);
 logo.innerHTML = "Modificando desde el DOM"

 let btnPlay = document.createElement('button');
 btnPlay.style.width = '100px';
 btnPlay.style.height = '50px';
 btnPlay.innerHTML = 'Play Me';
 btnPlay.style.backgroundColor = '#33453477';
 btnPlay.style.color = '#ffffff';
 btnPlay.style.borderRadius = '10px';

 //btnPlay.addEventListener('click', saludar) // (evento, function)

 btnPlay.addEventListener('dblclick', () => {
    alert('Haciendo doble click');
 })

 btnPlay.addEventListener('mouseover', (evento) => {
    evento.target.style.backgroundColor = '#cccccc';
    evento.target.style.color = '#000000';
 })

 btnPlay.addEventListener('mouseout', (evento) => {
    evento.target.style.backgroundColor = '#33453477';
    evento.target.style.color = '#ffffff';
 })

document.body.appendChild(btnPlay);




function saludar(){
    alert("Hola desde el DOM") // BOM (Browser Oject Model);
}

let username = document.querySelector('#username');

username.addEventListener('keyup', (evento) => {
    console.log(evento);
    console.log(evento.key);
    console.log(evento.target);
})