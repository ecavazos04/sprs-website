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
        about_content: "Specialized Painting and Rework Services (SPRS) is a leader in the industrial painting sector...",
        services_title: "Our Services",
        services_powder_title: "Powder Coating",
        services_powder_desc: "Durable and eco-friendly coatings.",
        services_liquid_title: "Liquid Coating",
        services_liquid_desc: "Custom finishes for complex geometries.",
        services_rework_title: "Rework Services",
        services_rework_desc: "Expert refinishing and restoration.",
        contact_title: "Contact Us",
        contact_intro: "We’re here to assist you! Fill out the form below or reach out to us directly: ",
        contact_phone: "Phone:",
        contact_email: "Email:",
        contact_address: "Address:",
        contact_form_title: "Get in Touch",
        contact_name_label: "Name:",
        contact_email_label: "Email:",
        contact_phone_label: "Phone:",
        contact_message_label: "Message:",
        contact_send: "Send"
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_services: "Servicios",
        nav_contact: "Contacto",
        home_title: "Bienvenido a SPRS",
        home_description: "Tu socio confiable para soluciones de pintura industrial de alta calidad.",
        home_explore: "Explora nuestros servicios",
        about_title: "Sobre Nosotros",
        about_content: "Specialized Painting and Rework Services (SPRS) es líder en el sector de pintura industrial...",
        services_title: "Nuestros Servicios",
        services_powder_title: "Recubrimiento en Polvo",
        services_powder_desc: "Recubrimientos duraderos y ecológicos.",
        services_liquid_title: "Recubrimiento Líquido",
        services_liquid_desc: "Acabados personalizados para geometrías complejas.",
        services_rework_title: "Servicios de Retrabajo",
        services_rework_desc: "Refinamiento y restauración expertos.",
        contact_title: "Contáctanos",
        contact_intro: "¡Estamos aquí para ayudarte! Completa el formulario a continuación o contáctanos directamente:",
        contact_phone: "Teléfono:",
        contact_email: "Correo electrónico:",
        contact_address: "Dirección:",
        contact_form_title: "Ponte en Contacto",
        contact_name_label: "Nombre:",
        contact_email_label: "Correo electrónico:",
        contact_phone_label: "Teléfono:",
        contact_message_label: "Mensaje:",
        contact_send: "Enviar"
    },
    cn: {
        nav_home: "主页",
        nav_about: "关于我们",
        nav_services: "服务",
        nav_contact: "联系我们",
        home_title: "欢迎来到 SPRS",
        home_description: "您值得信赖的高质量工业涂装和返工解决方案合作伙伴。",
        home_explore: "探索我们的服务",
        about_title: "关于我们",
        about_content: "Specialized Painting and Rework Services (SPRS) 是工业涂装行业的领导者...",
        services_title: "我们的服务",
        services_powder_title: "粉末涂料",
        services_powder_desc: "耐用且环保的涂层。",
        services_liquid_title: "液体涂料",
        services_liquid_desc: "适合复杂几何形状的定制饰面。",
        services_rework_title: "返工服务",
        services_rework_desc: "专家级的精加工和恢复。",
        contact_title: "联系我们",
        contact_intro: "我们随时为您服务！请填写以下表格或直接联系我们：",
        contact_phone: "电话:",
        contact_email: "电子邮件:",
        contact_address: "地址:",
        contact_form_title: "联系我们",
        contact_name_label: "姓名:",
        contact_email_label: "电子邮件:",
        contact_phone_label: "电话:",
        contact_message_label: "留言:",
        contact_send: "发送"
    }
};

// Event listener for language buttons
document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".lang-toggle");
    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            const lang = button.getAttribute("data-lang");
            updateLanguage(lang);
        });
    });
});

// Function to update the language
function updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Mejorado: Lazy Loading de imágenes
document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src; // Reemplaza el dataset src
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => observer.observe(img));
    }
});

// Buscador Interno Mejorado
const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        document.querySelectorAll('section, article').forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(query) ? 'block' : 'none';
        });
    });
}

// Lazy Loading avanzado con Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => observer.observe(img));
    }
});

// Animaciones suaves al hacer scroll
const sections = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});

// Indicador de navegación activo
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    window.addEventListener('scroll', () => {
        navLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
});
