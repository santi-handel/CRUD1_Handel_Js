const openModal = document.getElementById("openRegisterModal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeRegisterModal")
const showRegisterModal = () => {
    modal.classList.toggle("is-active");
}
const registerForm = document.getElementById("register-form");
openModal.addEventListener("click", showRegisterModal);
closeModal.addEventListener("click", showRegisterModal);

const clientRef = firebase.database().ref("clientes"); 

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = registerForm["nombre"].value;
    const apellido = registerForm["apellido"].value;
    const domicilio = registerForm["domicilio"].value;
    const telefono = registerForm["tel"].value;
    const email = registerForm["email"].value;

    const registrarCliente = clientRef.push()
    console.log(registrarCliente);
    console.log(registrarCliente.path.pieces_[1]);
    //registarCliente.set({
        //Uid : registarCliente.path.pieces_[1]
    //})
   })
