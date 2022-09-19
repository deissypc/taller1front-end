const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const reglas = {
	
	tipo:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	numero: /^\d{5,12}$/, 
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{10,20}$/,
	correo: /^[a-zA-Z0-9_.+-]+@misena.edu.co$/
	
	
}

const campos = {
	
	tipo: false,
	numero: false,
	nombre: false,
	apellido: false,
	
	password: false,
	correo: false,
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		
		case "tipo":
			validarCampo(reglas.tipo, e.target, 'tipo');
		break;
		case "nombre":
			validarCampo(reglas.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(reglas.apellido, e.target, 'apellido');
		break;
		case "correo":
			validarCampo(reglas.correo, e.target, 'correo');
		break;
		case "numero":
			validarCampo(reglas.numero, e.target, 'numero');
		break;
		
		case "password":
			validarCampo(reglas.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		
		
	}
}

const validarCampo = (regla, input,grupo) => {
	if(regla.test(input.value)){
		document.getElementById(`grupo__${grupo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${grupo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${grupo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${grupo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${grupo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[grupo] = true;
	} else {
		document.getElementById(`grupo__${grupo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${grupo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${grupo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${grupo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${grupo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[grupo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.tipo && campos.numero && campos.nombre && campos.apellido && campos.password && campos.correo  && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});