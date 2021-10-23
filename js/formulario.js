const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones={
	nombre: /^[a-zA-ZÀ-ÿ0-9\_\-\s]{1,40}$/, // Letras y espacios, pueden llevar acentos, numeros, 1 a 40 caracteres
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombre: false,
    correo: false, 
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, e.target.name);
        break;

        case "correo":
            validarCampo(expresiones.correo, e.target, e.target.name);

        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, e.target.name);

        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('bx-x');
        document.querySelector(`#grupo__${campo} i`).classList.add('bx-check');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('bx-check');
        document.querySelector(`#grupo__${campo} i`).classList.add('bx-x');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach( (input) => {
    input.addEventListener('keyup', validarFormulario);     //al levantar tecla
    input.addEventListener('blur', validarFormulario);      //al salir del input


})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();         // no envía por ahora

    const terminos = document.getElementById('terminos'); 
    if(campos.nombre && campos.correo && campos.telefono && terminos.checked){
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

        formulario.reset();
        setTimeout( () => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        } , 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach( (icono)=>{
            icono.classList.remove('formulario__grupo-correcto');
        });
    }else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }

}  );
