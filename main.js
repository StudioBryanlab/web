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
    image: "assets/images/nexusai.jpg",
    link: "#",
    featured: true,
    icon: "fa-robot"
  },
  {
    id: "de-compras-con-ali",
    title: "DE COMPRAS CON ALI",
    description: "Servicio personalizado de compras en EE.UU. que te ahorra tiempo y dinero. Encuentro los mejores descuentos en tus marcas favoritas y te las llevo hasta tu puerta.",
    technologies: ["E-commerce", "Logística", "Servicio Personalizado"],
    features: [
      "Compra en tus marcas favoritas sin moverte de casa",
      "Ahorro garantizado encontrando los mejores descuentos",
      "Servicio personalizado según tus preferencias",
      "Entrega segura y confiable",
      "Tiendas asociadas: ROSS, Marcos y otras marcas de lujo"
    ],
    image: "assets/images/landing-page-de-compras-con-ali.jpg",
    link: "#",
    featured: true,
    icon: "fa-shopping-bag"
  }
];

// ===== 2. FUNCIONES AUXILIARES ===== //

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

    document.querySelectorAll('.project-main-image').forEach(img => {
      loadImageWithFallback(img, img.dataset.src);
    });
  }
}

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

    const modalImg = document.querySelector('.modal-project-image img');
    loadImageWithFallback(modalImg, project.image);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  document.getElementById('project-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

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

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function setupProjectsButton() {
  const showProjectsBtn = document.getElementById('show-projects-btn');
  if (showProjectsBtn) {
    showProjectsBtn.addEventListener('click', () => {
      const projectsSection = document.getElementById('proyectos');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

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

function setupProjectInteractions() {
  document.addEventListener('click', function(e) {
    if (e.target.closest('.view-details-btn')) {
      const projectId = e.target.closest('.view-details-btn').getAttribute('data-project');
      showProjectDetails(projectId);
    }
  });

  document.querySelector('.close-modal')?.addEventListener('click', closeModal);
  window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('project-modal')) {
      closeModal();
    }
  });
}

function setupCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function setupFormSubmission() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      
      // Mostrar estado de carga
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitButton.disabled = true;
      
      // Enviar formulario
      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          window.location.href = contactForm.querySelector('[name="_next"]').value;
        } else {
          throw new Error('Error en el envío');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje. Por favor inténtalo de nuevo.');
      })
      .finally(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      });
    });
  }
}

// ===== 4. INICIALIZACIÓN ===== //
document.addEventListener('DOMContentLoaded', () => {
  setupCurrentYear();
  renderProjects();
  initTypingEffect();
  initSmoothScroll();
  setupProjectInteractions();
  setupProjectsButton();
  setupHorizontalScroll();
  setupFormSubmission();

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
