function validarFormulario() {
  const nombre = document.getElementById("name").value.trim();
  const correo = document.getElementById("email").value.trim();
  const telefono = document.getElementById("phone").value.trim();
  const mensaje = document.getElementById("message").value.trim();

  if (!nombre || !correo || !telefono || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexTelefono = /^\d{10}$/; // Acepta solo  números con 10 dígitos

  if (!regexCorreo.test(correo)) {
    alert("Por favor, ingresa un correo válido.");
    return false;
  }

  if (!regexTelefono.test(telefono)) {
    alert("Por favor, ingresa un número de teléfono válido (10 dígitos).");
    return false;
  }

  return true;
}
