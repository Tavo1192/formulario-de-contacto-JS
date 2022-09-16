const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const telefono = document.querySelector("#telefono").value
    const email = document.querySelector("#email").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hola ${nombre} por favor selecciona modelo y año de tu vehiculo, gracias por dejarnos tu numero ${telefono} y direcion de mail ${email}`
   
}
respuesta.textContent = "por favor ingresa los datos de tu vehiculo"
let boton = document.getElementById("button");
boton.onclick = () => {
let ele1 = document.getElementById("marca");
let precio1 = parseInt(ele1.options[ele1.selectedIndex].value);
let ele2 = document.getElementById("modelo");
let precio2 = parseInt(ele2.options[ele2.selectedIndex].value);
let ele3 = document.getElementById("anio");
let precio3 = parseInt(ele3.options[ele3.selectedIndex].value);
let suma = `Total $ ${precio1 + precio2 + precio3}`;
document.getElementById("resultado").value = suma;
};


