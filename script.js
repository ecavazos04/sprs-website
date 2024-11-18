function validarFormulario() {
  const nombre = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("message").value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  // Validación básica de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return false;
  }

  return true;
}
