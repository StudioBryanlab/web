// ===== 1. DATOS ===== //
const PROJECTS = [
    {
        title: "Proyecto con IA",
        description: "Sistema de recomendación creado con DeepSeek Chat.",
        technologies: ["JavaScript", "Python", "IA"],
        image: "assets/images/proyecto-ia.webp",
        link: "#",
        featured: true
    },
    {
        title: "Web Futurista",
        description: "Landing page con efectos 3D usando Three.js.",
        technologies: ["HTML", "CSS", "Three.js"],
        image: "assets/images/web-futurista.webp",
        link: "#"
    }
];

// ===== 2. SELECTORES ===== //
const DOM = {
    projectsContainer: document.getElementById('projects-container'),
    typedName: document.getElementById('typed-name'),
    typedText: document.getElementById('typed-text'),
    year: document.getElementById('year')
};

// ===== 3. FUNCIONES ===== //
function scrollToProjects() {
    const projectsSection = document.getElementById('proyectos');
    if (projectsSection) {
        const offset = 90; // Altura de tu menú fijo
        const elementPosition = projectsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

function setupTheme() {
    const userPref = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = userPref ? userPref === 'dark' : prefersDark;

    document.body.classList.toggle('light-mode', !isDarkMode);
    DOM.themeToggle.innerHTML = `<i class="fas fa-${isDarkMode ? 'moon' : 'sun'}"></i>`;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    DOM.themeToggle.addEventListener('click', () => {
        const isCurrentlyDark = !document.body.classList.contains('light-mode');
        document.body.classList.toggle('light-mode', isCurrentlyDark);
        DOM.themeToggle.innerHTML = `<i class="fas fa-${isCurrentlyDark ? 'sun' : 'moon'}"></i>`;
        localStorage.setItem('theme', isCurrentlyDark ? 'light' : 'dark');
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initTypingEffect() {
    new Typed(DOM.typedName, {
        strings: ['Bryan Campos'],
        typeSpeed: 100,
        showCursor: false
    });
    new Typed(DOM.typedText, {
        strings: ['Desarrollador FullStack', 'Especialista en IA'],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });
}

// ===== 4. INICIALIZACIÓN ===== //
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initTypingEffect(); // Solo una vez
    initSmoothScroll();
    
    if (DOM.year) DOM.year.textContent = new Date().getFullYear();

    if (typeof Typed !== 'undefined') {
        initTypingEffect();
    } else {
        // Carga deferida si Typed.js no está aún disponible
        const typedScript = document.createElement('script');
        typedScript.src = 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js';
        typedScript.onload = initTypingEffect;
        document.head.appendChild(typedScript);
    }
});

// ===== 5. PWA (OPCIONAL) ===== //
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}
document.getElementById('show-projects-btn').addEventListener('click', function() {
    const projectsSection = document.getElementById('proyectos');
    const headerHeight = 90; // Altura de tu menú
    
    // Calculamos la posición destino
    const targetPosition = projectsSection.offsetTop - headerHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // 0.8 segundos (aumentado desde los 0.3-0.5s por defecto)
    let startTime = null;
    
    // Función de animación
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Función de easing para suavizar
    function easeInOutQuad(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
});