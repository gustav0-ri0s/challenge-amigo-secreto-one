// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function limpiarcaja(){
    document.querySelector('#amigo').value='';
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre == ""){
        alert("Nombre inválido, intentelo nuevamente");
    } else {
        if (nombresAmigos.includes(nombre)){
            alert("Nombre ya existe");
            limpiarcaja();
        } else {
            nombresAmigos.push(nombre);
            console.log(nombresAmigos);
            limpiarcaja();
        }
        
    }
    
}



function sortearAmigo(){
    let  amigosorteado = Math.floor(Math.random()*(nombresAmigos.length));
    console.log(amigosorteado);
    console.log(nombresAmigos[amigosorteado]);

}