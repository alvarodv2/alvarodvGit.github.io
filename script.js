function validadorEmail() {
    let email = document.getElementById("email").value;
    
    let emailRegular = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
    
    if (email === '') {
        return {
            icon: 'error',
            title: 'ERROR',
            text: 'No puedes dejar el campo vacío!'
        }
    }
    
    if (!emailRegular.test(email)) {
        return {
            icon: 'error',
            title: 'ERROR',
            text: 'Introduce un correo electrónico válido'
        }
    }
}

function validarEmail() {
    let esInvalido = validadorEmail();

    if (esInvalido) {
        generarPopUp(esInvalido.icon, esInvalido.title, esInvalido.text);
        anadirInvalidoACampo("email")
    } else {
        generarPopUp("success", "CORRECTO", "Email válido!")
        quitarInvalidoACampo("email")
    }
}

function validadorPassword() {
    let contrasena = document.getElementById("password").value;
    let contrasenaRegular = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,}$/gm;

    if (contrasena === '') {
        return {
            icon: 'error',
            title: 'ERROR',
            text: 'Debes de introducir una contraseña!'
        }
    }

    if (!contrasenaRegular.test(contrasena)) {
        return {
            icon: 'error',
            title: 'ERROR',
            text: 'Introduce una contraseña válida'
        }
    }    
}

function validarPassword() {
    let esInvalido = validadorPassword();
    if (esInvalido) {
        generarPopUp(esInvalido.icon, esInvalido.title, esInvalido.text);
        anadirInvalidoACampo("password")
    } else {
        generarPopUp("success", "CORRECTO", "Contraseña válida!")
        quitarInvalidoACampo("password")
    }
}
function validadorUserName() {
    let userName = document.getElementById("userName").value;

    let userNameRegular = /^\w{3,}$/gm;

    if (userName === '') {
        return {
            icon: 'error',
            title: 'ERROR',
            text: 'Debes de introducir un nombre de usuario!'
        };
    }
    if (!userNameRegular.test(userName)) {
        return {
            icon: 'error',
            title: 'ERROR',
            text: 'Debes introducir un mínimo de 3 carácteres!'
        }
    }
}
function validarUserName() {
    let esInvalido = validadorUserName();
    if (esInvalido) {
        generarPopUp(esInvalido.icon, esInvalido.title, esInvalido.text);
        anadirInvalidoACampo("userName")
    } else {
        generarPopUp("success", "CORRECTO", "Nombre de usuario válido!")
        quitarInvalidoACampo("userName")
    }
}

function validadorFSName() {
    let firstAndSecond = document.getElementById("nombreyApell").value;

    let firstAndSecondRegular = /^[a-zA-Z ]{3,}$/

    if (firstAndSecond === "") {
        return {
            icon: 'error',
            title: 'ERROR',
            text: 'Introduce tu nombre y apellidos!'
        }
    }
    if (!firstAndSecondRegular.test(firstAndSecond)) {
        return {
            icon: 'error',
            title: 'ERROR',
            text: 'Introduce nombre y apellidos válidos!'
        }
    }
}

function validarFSName() {
    let esInvalido = validadorFSName();
    if (esInvalido) {
        generarPopUp(esInvalido.icon, esInvalido.title, esInvalido.text);
        anadirInvalidoACampo("nombreyApell")
    } else {
        generarPopUp("success", "CORRECTO", "Nombre y apellidos válidos!")
        quitarInvalidoACampo("nombreyApell")
    }
}




function validarControlTotal() {

    let emailValido = validadorEmail();
    let passwordValida = validadorPassword();
    let userNameValido = validadorUserName();
    let FSNameValidos = validadorFSName();

    let errorAMostrar = "";

    if (emailValido) {
        anadirInvalidoACampo("email")
        errorAMostrar += emailValido.text + "<br>";
    } else {
        quitarInvalidoACampo("email")
    }

    if (passwordValida) {
        anadirInvalidoACampo("password")
        errorAMostrar += passwordValida.text + "<br>";
    } else {
        quitarInvalidoACampo("password")
    }

    if (userNameValido) {
        anadirInvalidoACampo("userName")
        errorAMostrar += userNameValido.text + "<br>";
    } else {
        quitarInvalidoACampo("userName")
    }

    if (FSNameValidos) {
        anadirInvalidoACampo("nombreyApell")
        errorAMostrar += FSNameValidos.text + "<br>";
    } else {
        quitarInvalidoACampo("nombreyApell")
    }

    if (emailValido || passwordValida || userNameValido || FSNameValidos) {
        generarPopUp("error", "ERROR", errorAMostrar)
    } else {
        generarPopUp("success", "CORRECTO", "Datos válidos!")
    }
}


function validarLimpiar() {

    let email = valorDeCampo("email");
    let contrasena = valorDeCampo("password");
    let userName = valorDeCampo("userName");
    let firstAndSecond = valorDeCampo("nombreyApell");

    let comprobar = email + contrasena + userName + firstAndSecond;

    if (comprobar === "") {
        generarPopUp('warning', 'ERROR', 'No hay datos que limpiar!');
    }

    quitarInvalidoACampo("email");
    quitarInvalidoACampo("password");
    quitarInvalidoACampo("userName");
    quitarInvalidoACampo("nombreyApell");
}

function generarPopUp(icon, title, text) {
    Swal.fire({
        icon: icon,
        title: title,
        html: text
    })
}

function anadirInvalidoACampo(id) {
    document.getElementById(id).style.border = '2px solid red';
}

function quitarInvalidoACampo(id) {
    document.getElementById(id).style.border = '';
}

function valorDeCampo(id) {
    return document.getElementById(id).value;
}

