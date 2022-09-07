let pedirAuto = document.getElementById("pedirAuto");

pedirAuto.addEventListener("click", guardarDatos );


function guardarDatos(){
    let name = prompt("Dejame Tu nombre.")
    let direccionPartida = prompt("Desde donde vas?")
    let direccionLlegada = prompt("Hacia donde te dirigis? ");
    let pregunta = prompt( `Hola ${name } Te dirigis desde ${ direccionPartida } y vas hasta ${ direccionLlegada}?` )
    if(pregunta === "si"){
        alert("auto enviado")
    }
    else {
        alert("Error.")
    }
 } 

