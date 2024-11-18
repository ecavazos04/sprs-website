<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    if (!empty($name) && !empty($email) && !empty($message)) {
        $to = "contacto@sprs.com";
        $subject = "Nuevo mensaje de contacto de $name";
        $body = "Nombre: $name\nCorreo: $email\nMensaje:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "¡Gracias por contactarnos! Responderemos pronto.";
        } else {
            echo "Hubo un problema al enviar tu mensaje. Intenta más tarde.";
        }
    } else {
        echo
