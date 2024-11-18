<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    if (!empty($name) && !empty($email) && !empty($message)) {
        $to = "contacto@sprs.com";
        $subject = "Nuevo mensaje de contacto de $name";
        $body = "Nombre: $name\nCorreo: $email\nMensaje:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "<h1>¡Gracias por contactarnos! Responderemos pronto. </h1>";
        } else {
            echo "<h1>Hubo un problema al enviar tu mensaje. Intenta más tarde.</h1>";
        }
    } else {
        echo "<h1>Por favor, completa todos los campos.</h1>";
    }
}
?>
