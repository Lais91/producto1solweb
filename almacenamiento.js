function inicio() {

    const email = document.getElementById('Email').value;
    const contraseña = document.getElementById('Contraseña').value;
    console.log(email, contraseña);

    if ((email === 'lais@lais.com' && contraseña === 'hola') || (email === 'hugo@hugo.com' && contraseña === 'hugo') ) {
        window.location.href = 'lobby.html';
        localStorage.email = email; 
    }else{
        alert('Email o contraseña incorrectos')
    }
}

document.querySelector('#botonRegistro').addEventListener('click', registrar);

function registro() {
    var aNuevoUsuario = [],
        sUsuario = '',
        sAvatar = '',
        sEmail = '',
        sContraseña = '',
    
    sUsuario = document.querySelector('#Usuario').value;
    sAvatar = document.querySelector('#Avatar').value;
    sEmail = document.querySelector('#Email').value;
    sContraseña = document.querySelector('#Contraseña').value;

    console.log('Email ' + sEmail);
    console.log('Contraseña ' + sContraseña);
}

 