class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
const users = [
  (newUser = new User(1, "Nicole Romero", "nicole@gmail.com", "123456")),
  (newUser = new User(2, "Matías", "matias@gmail.com", "123456")),
];

// let users;
// if (localStorage.getItem(users)) {
//   users = JSON.parse(localStorage.getItem('users'))
// } else {
//   const users = [
//     (newUser = new User(1, "Nicole Romero", "nicole@gmail.com", "123456")),
//     (newUser = new User(2, "Matías", "matias@gmail.com", "123456")),
//   ];

// }
function login(event) {
  event.preventDefault(); //! todos los formularios tienen evento por default que refresca la página
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email);
  console.log(password);
  const userFound = users.find((user) => user.email == email);
  //por defecto, si no pongo el true, va a comprobar que sea correcto
  if (userFound == true) {
    const isOk = userFound.password == password;
    if (isOk) {
      alert("Entró correctamente"); //Primero comprueba que exista el usuario
      window.location.assign(window.location.origin + "/carrito2.html");
    } else {
      alert("clave incorrecta");
    }
  } else {
    alert("usuario incorrecto");
  }
  document.querySelector("form").reset();
}
function alertMessage(message) {
  let alertMessage = document.createElement("div");
  alertMessage.classList.add("alert", "alert-danger m-3");
  alertMessage.setAttribute("role", "alert");
  alertMessage.innerText = message;
  let container = document.querySelector("form");
}
//REGEX - VALIDACION DE REGISTER DESDE JS
