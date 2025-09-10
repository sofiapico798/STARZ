fetch('componente.html') .then(response => response.text()) 
.then(data => { document.getElementById('componente-placeholder')
    .innerHTML = data; });




function validador(){
    let formu = document.getElementById("formu");
    let selecciones = document.getElementById("selecciones");
    let nombrecomplet = document.getElementById("nombrecomplet");
    let correo = document.getElementById("correo");
    let celular =  document.getElementById("celular");
    let consulta = document.getElementById("consulta");

    console.log(selecciones.value);
    console.log(nombrecomplet.value);
    console.log(correo.value);
    console.log(celular.value);
    console.log(consulta.value);
    
    console.log("aca");
    errores.innerText = "¡Falta completar datos!";



}


