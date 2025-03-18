// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

valoresIniciales();

// Captura el evento de la tecla "Enter" en el campo de texto
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});


function limpiarcaja(){
    document.querySelector('#amigo').value='';
}

function formatearNombre(nombre){
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function asignarTextoElemento(elemento, texto, agregarBotonEliminar = true) {
    let elementoHTML = document.querySelector(elemento); // Busca el elemento en el DOM

    if (elementoHTML) {
        let nuevoElemento = document.createElement("li"); // Crea un nuevo <li>
        nuevoElemento.textContent = texto; // Asigna el texto al <li>.

        if (agregarBotonEliminar) {
            let botonEliminar = document.createElement("button");
            botonEliminar.textContent = "🗑️";
            botonEliminar.onclick = function() {
                let audio = document.getElementById('quitarSound');
                audio.play();
                nombresAmigos = nombresAmigos.filter(n => n !== texto);
                elementoHTML.removeChild(nuevoElemento);
            };

            nuevoElemento.appendChild(botonEliminar);
        }
        
        elementoHTML.appendChild(nuevoElemento); // Agrega el <li> dentro del elemento encontrado
    }
}

function valoresIniciales(){
    nombresAmigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    limpiarcaja();    

    // Ocultar el botón de "Nuevo sorteo"
    document.getElementById('nuevoSorteo').style.display = "none";

    // Cambiar solo el texto del botón sin eliminar la imagen
    let botonSortear = document.querySelector('.button-draw');
    
    // Cambiar el texto del botón y mantener la imagen
    botonSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo';
}

function reiniciarSorteo(){
    let mantenerAmigos = confirm("¿Desea mantener los amigos actuales?");
    if (mantenerAmigos){
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('nuevoSorteo').style.display = "none";
        let botonSortear = document.querySelector('.button-draw');
        botonSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo';
    } else {
        valoresIniciales();
    }
    console.log("Sorteo reiniciado!");
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre == ""){
        alert("Nombre inválido, intentelo nuevamente");
        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        limpiarcaja();
        return;
    }

    nombre = formatearNombre(nombre);

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
    let audio = document.getElementById('sorteoSound');
    audio.play();


    // Lanza confeti
    confetti({
        particleCount: 100, // Cantidad de partículas de confeti
        spread: 70, // Ángulo de dispersión
        origin: { y: 0.6 } // Origen del confeti (0.6 = 60% desde la parte superior)
    });

    // Sortear amigo secreto
    let amigosorteado = Math.floor(Math.random()*(nombresAmigos.length));
    let nombreSorteado = nombresAmigos[amigosorteado];
    let texto = `El amigo secreto sorteado es <span class="nombre-sorteado"> ${nombreSorteado}</span>`; 
    console.log(amigosorteado);
    console.log(nombreSorteado);
    // Limpiar el contenido previo de #resultado
    document.querySelector('#resultado').innerHTML = texto;
    //asignarTextoElemento('#resultado',texto,false);

    // Cambiar solo el texto del botón sin eliminar la imagen
    let botonSortear = document.querySelector('.button-draw');
    
    // Cambiar el texto del botón y mantener la imagen
    botonSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortea otra vez';

    // Mostrar el botón de "Nuevo sorteo"
    document.getElementById('nuevoSorteo').style.display = "inline-block";
}