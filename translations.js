
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-toggle');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }
});

const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        contact_send: "Send",
        contact_name_label: "Name:",
        contact_email_label: "Email:",
        contact_phone_label: "Phone:",
        contact_message_label: "Message:"
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_services: "Servicios",
        nav_contact: "Contacto",
        contact_send: "Enviar",
        contact_name_label: "Nombre:",
        contact_email_label: "Correo Electrónico:",
        contact_phone_label: "Teléfono:",
        contact_message_label: "Mensaje:"
    }
};
