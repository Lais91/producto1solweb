function inicio() {
  const email = document.getElementById("Email").value;
  const contraseña = document.getElementById("Contraseña").value;
  const avatar = document.getElementById("Avatar").value;
  const gameRoom = document.getElementById("GameRoom").value;

  console.log(email, contraseña, avatar, gameRoom);

  if (
    (email === "lais@lais.com" && contraseña === "hola") ||
    (email === "oriol@oriol.com" && contraseña === "oriol")
  ) {
    window.location.href = "lobby.html";
    localStorage.email = email;
    localStorage.contraseña = contraseña;
    localStorage.avatar = avatar;
    localStorage.gameRoom = gameRoom;
  } else {
    alert("Email o contraseña incorrectos");
  }
}

document.querySelector("#botonRegistro").addEventListener("click", registro);

function registro() {
  var sUsuario = "",
    sAvatar = "",
    sEmail = "",
    sContraseña = "",
    sGameRoom = "",
    sUsuario = document.querySelector("#Usuario").value;
  sAvatar = document.querySelector("#Avatar").value;
  sEmail = document.querySelector("#Email").value;
  sContraseña = document.querySelector("#Contraseña").value;
  sGameRoom = document.querySelector("#GameRoom").value;

  console.log("Email " + sEmail);
  console.log("Contraseña " + sContraseña);
  ç;
  console.log("Usuario " + sUsuario);

  console.log("Avatar " + sAvatar);
  console.log("GameRoom " + sGameRoom);
}
