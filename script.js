function validarFormulario() {
  const nombre = document.getElementById("name").value.trim();
  const correo = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("message").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    alert("Por favor, ingresa un correo válido.");
    return false;
  }

  return true;
}
