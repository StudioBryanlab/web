// ===== 1. DATOS DE PROYECTOS ===== //
const PROJECTS = [
  {
    id: "taskmaster",
    title: "TaskMaster PRO",
    description: "Gestor de tareas inteligente con sugerencias de IA para mejorar la productividad. Combina técnicas de gamificación con algoritmos de aprendizaje automático para optimizar tu flujo de trabajo.",
    technologies: ["JavaScript", "Node.js", "DeepSeek API"],
    features: [
      "Gestión de tareas con categorías y prioridades",
      "Sugerencias de productividad basadas en IA",
      "Diseño con efecto 'glassmorphism'",
      "Funcionalidad offline completa",
      "Sincronización entre dispositivos"
    ],
    // Reemplaza con tu imagen real en assets/images/
    image: "assets/images/taskmaster.jpg",
    link: "#",
    featured: true,
    icon: "fa-rocket"
  },
  {
    id: "ia-system",
    title: "Sistema de IA Avanzado",
    description: "Plataforma de inteligencia artificial especializada en procesamiento de lenguaje natural (NLP) y aprendizaje automático. Integra modelos transformer personalizados.",
    technologies: ["TensorFlow 2.0", "Transformers", "FastAPI"],
    features: [
      "Modelos de NLP para español e inglés",
      "Fine-tuning de modelos BERT y GPT",
      "API REST con autenticación JWT",
      "Dashboard de monitoreo en tiempo real",
      "Despliegue con Docker y Kubernetes"
    ],
    // Reemplaza con tu imagen real en assets/images/
    image: "assets/images/sistema-ia.jpg", 
    link: "#",
    icon: "fa-brain"
  },
  {
    id: "nexusai",
    title: "NexusAI",
    description: "Plataforma de IA para pequeñas empresas que automatiza tareas, analiza datos y genera contenido. Solución todo-en-uno para emprendedores con tecnología de vanguardia.",
    technologies: ["Inteligencia Artificial", "JavaScript", "CSS", "HTML"],
    features: [
      "Generación automática de contenido optimizado",
      "Chatbots inteligentes con NLP personalizado",
      "Dashboards analíticos predictivos",
      "Interfaz intuitiva con diseño futurista",
      "Integración con APIs populares"
    ],
    image: "assets/images/NexusAI.jpg",
    link: "#",
    featured: true,
    icon: "fa-robot"
  },
  {
    id: "ecommerce-ai",
    title: "E-Commerce AI",
    description: "Solución de comercio electrónico potenciada por IA con recomendaciones personalizadas y gestión inteligente de inventario.",
    technologies: ["React", "Node.js", "TensorFlow"],
    features: [
      "Recomendaciones en tiempo real",
      "Chatbot de atención al cliente",
      "Predicción de tendencias",
      "Optimización de precios"
    ],
    image: "assets/images/ecommerce-ai.jpg",
    link: "#",
    icon: "fa-shopping-cart"
  }
];

// ===== 2. FUNCIONES AUXILIARES ===== //

// Cargar imagen con manejo de errores
function loadImageWithFallback(imgElement, imageUrl) {
  const fallbackImage = "https://via.placeholder.com/600x400/0e0e1c/00f7ff?text=Imagen+no+disponible";
  
  const img = new Image();
  img.src = imageUrl;
  
  img.onload = function() {
    imgElement.src = imageUrl;
  };
  
  img.onerror = function() {
    imgElement.src = fallbackImage;
    imgElement.alt = "Imagen no disponible";
    console.error(`Error al cargar: ${imageUrl}`);
  };
}

// ===== 3. FUNCIONES PRINCIPALES ===== //

// Renderizar proyectos con manejo seguro de imágenes
function renderProjects() {
  const projectsContainer = document.querySelector('.projects-horizontal-scroll');
  
  if (projectsContainer) {
    projectsContainer.innerHTML = PROJECTS.map(project => `
      <div class="project-card-horizontal">
        <div class="project-image-container">
          <img src="" alt="${project.title}" class="project-main-image" 
               data-src="${project.image}">
          <div class="project-overlay">
            <div class="project-header">
              <h3><i class="fas ${project.icon}"></i> ${project.title}</h3>
              <div class="project-tech">
                ${project.technologies.slice(0, 3).map(tech => `
                  <span>${tech}</span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
        <div class="project-info">
          <p>${project.description.split('. ')[0]}.</p>
          <div class="project-actions">
            <button class="view-details-btn" data-project="${project.id}">
              <i class="fas fa-search-plus"></i> Detalles
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Cargar imágenes con manejo de errores
    document.querySelectorAll('.project-main-image').forEach(img => {
      loadImageWithFallback(img, img.dataset.src);
    });
  }
}

// Mostrar detalles del proyecto en modal
function showProjectDetails(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  
  if (project) {
    modalContent.innerHTML = `
      <div class="project-details-modal">
        <div class="modal-project-header">
          <h2>${project.title}</h2>
          <div class="modal-tech-tags">
            ${project.technologies.map(tech => `
              <span>${tech}</span>
            `).join('')}
          </div>
        </div>
        
        <div class="modal-project-content">
          <div class="modal-project-image">
            <img src="" alt="${project.title}" data-src="${project.image}">
          </div>
          
          <div class="modal-project-info">
            <h3>Descripción del Proyecto</h3>
            <p>${project.description}</p>
            
            <h3>Características Principales</h3>
            <ul class="modal-features-list">
              ${project.features.map(feat => `
                <li>${feat}</li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;

    // Cargar imagen del modal con manejo de errores
    const modalImg = document.querySelector('.modal-project-image img');
    loadImageWithFallback(modalImg, project.image);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

// Cerrar modal
function closeModal() {
  document.getElementById('project-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Configurar efecto de escritura
function initTypingEffect() {
  if (typeof Typed !== 'undefined') {
    new Typed('#typed-name', {
      strings: ['Bryan Campos'],
      typeSpeed: 100,
      showCursor: false
    });
    new Typed('#typed-text', {
      strings: ['Desarrollador FullStack', 'Especialista en IA', 'Creador de soluciones'],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
}

// Configurar scroll suave
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Configurar botón "Ver Proyectos"
function setupProjectsButton() {
  const showProjectsBtn = document.getElementById('show-projects-btn');
  if (showProjectsBtn) {
    showProjectsBtn.addEventListener('click', () => {
      const projectsSection = document.getElementById('proyectos');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// Configurar desplazamiento horizontal con flechas
function setupHorizontalScroll() {
  const scrollContainer = document.querySelector('.projects-horizontal-scroll');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  
  if (scrollContainer && leftArrow && rightArrow) {
    leftArrow.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    rightArrow.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
}

// Configurar interacciones de proyectos
function setupProjectInteractions() {
  // Botones de ver detalles
  document.addEventListener('click', function(e) {
    if (e.target.closest('.view-details-btn')) {
      const projectId = e.target.closest('.view-details-btn').getAttribute('data-project');
      showProjectDetails(projectId);
    }
  });

  // Cerrar modal
  document.querySelector('.close-modal')?.addEventListener('click', closeModal);
  window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('project-modal')) {
      closeModal();
    }
  });
}

// Configurar año actual en footer
function setupCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ===== 4. INICIALIZACIÓN ===== //
document.addEventListener('DOMContentLoaded', () => {
  // Configurar año actual
  setupCurrentYear();

  // Renderizar proyectos dinámicamente
  renderProjects();

  // Configurar efectos de escritura
  initTypingEffect();
  
  // Configurar scroll suave
  initSmoothScroll();
  
  // Configurar interacciones de proyectos
  setupProjectInteractions();

  // Configurar botón "Ver Proyectos"
  setupProjectsButton();

  // Configurar desplazamiento horizontal
  setupHorizontalScroll();

  // Carga diferida de Typed.js si no está disponible
  if (typeof Typed === 'undefined') {
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
