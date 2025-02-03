// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function limpiarcaja(){
    document.querySelector('#amigo').value='';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // Busca el elemento en el DOM

    if (elementoHTML) {
        let nuevoElemento = document.createElement("li"); // Crea un nuevo <li>
        nuevoElemento.textContent = texto; // Asigna el texto al <li>
        elementoHTML.appendChild(nuevoElemento); // Agrega el <li> dentro del elemento encontrado
    }
}


function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre == ""){
        alert("Nombre inválido, intentelo nuevamente");
        return;
    }

    if (nombresAmigos.includes(nombre)){
        alert("Nombre ya existe");
        limpiarcaja();
        return;
    }

    if (!isNaN(nombre)){
        alert("No puedes ingresar un número como nombre. Intenta nuevamente");
        limpiarcaja();
        return;
    }
    
    nombresAmigos.push(nombre);
    console.log(nombresAmigos);
    asignarTextoElemento('#listaAmigos',nombre);
    limpiarcaja();      
}



function sortearAmigo(){
    if (nombresAmigos.length==0){
        alert("No existen nombres para sortear");
        return;
    }
    let amigosorteado = Math.floor(Math.random()*(nombresAmigos.length));
    let texto = `El amigo secreto sorteado es ${nombresAmigos[amigosorteado]}`; 
    console.log(amigosorteado);
    console.log(nombresAmigos[amigosorteado]);
    // Limpiar el contenido previo de #resultado
    document.querySelector('#resultado').innerHTML = "";
    asignarTextoElemento('#resultado',texto);

    // Cambiar solo el texto del botón sin eliminar la imagen
    let botonSortear = document.querySelector('.button-draw');
    
    // Cambiar el texto del botón y mantener la imagen
    botonSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortea otra vez';

}