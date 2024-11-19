
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        home_title: "Welcome to SPRS",
        home_description: "Your trusted partner for high-quality industrial painting and rework solutions.",
        home_explore: "Explore Our Services",
        about_title: "About Us",
        about_content: "Specialized Painting and Rework Services (SPRS) is a leader in the industrial painting sector.",
        services_title: "Our Services",
        services_powder_title: "Powder Coating",
        services_powder_desc: "Durable and eco-friendly coatings.",
        services_liquid_title: "Liquid Coating",
        services_liquid_desc: "Custom finishes for complex geometries.",
        services_rework_title: "Rework Services",
        services_rework_desc: "Expert refinishing and restoration.",
        contact_title: "Contact Us",
        contact_intro: "We’re here to assist you! Fill out the form below:",
        contact_name: "Name:",
        contact_email: "Email:",
        contact_message: "Message:",
        contact_submit: "Send",
        footer_copyright: "© 2024 Specialized Painting and Rework Services. All Rights Reserved."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".lang-toggle");
    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            const lang = button.dataset.lang;
            updateLanguage(lang);
        });
    });
});

function updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(el => {
        const key = el.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
