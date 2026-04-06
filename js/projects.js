// projects.js
const projectsData = [
    {
        id: 1,
        title: "Cebu Emergency System",
        shortDesc: "Flutter-based emergency response app for Cebu Province with SOS features and real-time alerts.",
        fullDesc: "A comprehensive emergency response application built with Flutter. Features include one-tap SOS button, emergency contact database, offline maps of evacuation centers, real-time weather alerts for typhoons, and direct calling to police, fire, and medical services. Designed for rapid deployment during natural disasters.",
        techStack: ["Flutter", "Firebase", "Dart", "Google Maps API"],
        icon: "fas fa-ambulance",
        highlight: "🚨 Critical Response System",
        type: "download",
        url: "app/cebu_emergency.apk",
        buttonText: "Download APK",
        buttonIcon: "fas fa-download"
    },
    {
        id: 2,
        title: "Tourist Spot Cebu",
        shortDesc: "Interactive showcase of 5 must-visit destinations in Cebu with travel guides.",
        fullDesc: "A visually stunning web application highlighting 5 iconic Cebu attractions: Kawasan Falls, Magellan's Cross, Oslob Whale Sharks, Temple of Leah, and Moalboal Sardine Run. Each destination features high-quality imagery, cultural insights, travel tips, and interactive maps.",
        techStack: ["HTML5", "CSS3", "JavaScript", "Leaflet.js"],
        icon: "fas fa-umbrella-beach",
        highlight: "⭐ 5 Cebu Destinations",
        type: "link",
        url: "https://itsmeclark.github.io/touristspotcebu/",
        buttonText: "Live Demo",
        buttonIcon: "fas fa-external-link-alt"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        shortDesc: "Real-time weather web app with dynamic backgrounds and 5-day forecasts.",
        fullDesc: "Powered by OpenWeatherMap API, this weather dashboard provides current conditions, temperature, humidity, wind speed, and 5-day forecast. Features include geolocation support, city search, animated weather icons, and dynamic backgrounds that change based on weather conditions.",
        techStack: ["JavaScript", "OpenWeather API", "CSS Grid", "Chart.js"],
        icon: "fas fa-cloud-sun",
        highlight: "🌤️ Real-time Updates",
        type: "link",
        url: "https://itsmeclark.github.io/weather/",
        buttonText: "Live Demo",
        buttonIcon: "fas fa-external-link-alt"
    }
];

// Render projects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Generate tech badges HTML
        const techHtml = project.techStack.map(tech => 
            `<span class="tech-badge">${tech}</span>`
        ).join('');
        
        // Generate button based on project type
        const buttonHtml = project.type === 'download' 
            ? `<a href="${project.url}" class="btn-download" download>
                   <i class="${project.buttonIcon}"></i>
                   <span>${project.buttonText}</span>
               </a>`
            : `<a href="${project.url}" class="btn-demo" target="_blank" rel="noopener noreferrer">
                   <i class="${project.buttonIcon}"></i>
                   <span>${project.buttonText}</span>
               </a>`;
        
        card.innerHTML = `
            <div class="card-icon">
                <i class="${project.icon}" style="color: #a5b4fc;"></i>
            </div>
            <div class="project-highlight">${project.highlight}</div>
            <h3>${project.title}</h3>
            <div class="project-tech">${techHtml}</div>
            <p class="project-description">${project.shortDesc}</p>
            <div class="card-footer">
                ${buttonHtml}
                <button class="btn-demo info-btn" data-id="${project.id}" style="background: rgba(255,255,255,0.05); color: #9ca3af;">
                    <i class="fas fa-info-circle"></i>
                    <span>Details</span>
                </button>
            </div>
        `;
        
        // Add event listener for info button
        const infoBtn = card.querySelector('.info-btn');
        infoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showProjectDetails(project);
        });
        
        projectsGrid.appendChild(card);
    });
});

// Function to show project details in a modal
function showProjectDetails(project) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-container">
            <div class="modal-header">
                <div class="modal-icon">
                    <i class="${project.icon}" style="font-size: 2rem; color: #a5b4fc;"></i>
                </div>
                <h2 class="modal-title">${project.title}</h2>
                <button class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="modal-highlight">${project.highlight}</div>
                <p class="modal-description">${project.fullDesc}</p>
                <div class="modal-tech">
                    <strong style="color: white;">Tech Stack:</strong>
                    <div class="tech-list">
                        ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="modal-actions">
                    ${project.type === 'download' 
                        ? `<a href="${project.url}" class="btn-demo" download style="width: 100%; justify-content: center;">
                               <i class="${project.buttonIcon}"></i>
                               <span>${project.buttonText}</span>
                           </a>`
                        : `<a href="${project.url}" class="btn-demo" target="_blank" rel="noopener noreferrer" style="width: 100%; justify-content: center;">
                               <i class="${project.buttonIcon}"></i>
                               <span>${project.buttonText}</span>
                           </a>`
                    }
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Close modal function
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    };
    
    // Event listeners for closing
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    // Close on Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Add modal styles dynamically
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .project-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }
    
    .project-modal.active {
        opacity: 1;
        pointer-events: auto;
    }
    
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
    }
    
    .modal-container {
        position: relative;
        background: linear-gradient(135deg, rgba(18, 22, 40, 0.95), rgba(12, 15, 30, 0.98));
        backdrop-filter: blur(20px);
        border-radius: 32px;
        max-width: 550px;
        width: 90%;
        max-height: 85vh;
        overflow-y: auto;
        border: 1px solid rgba(79, 70, 229, 0.3);
        transform: scale(0.9);
        transition: transform 0.3s ease;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    }
    
    .project-modal.active .modal-container {
        transform: scale(1);
    }
    
    .modal-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 1.5rem 0.5rem 1.5rem;
        position: relative;
    }
    
    .modal-icon {
        width: 55px;
        height: 55px;
        background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(124, 58, 237, 0.1));
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(79, 70, 229, 0.3);
    }
    
    .modal-title {
        flex: 1;
        font-size: 1.6rem;
        font-weight: 700;
        color: white;
        margin: 0;
    }
    
    .modal-close {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #9ca3af;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-close:hover {
        background: rgba(239, 68, 68, 0.2);
        color: #ef4444;
        border-color: rgba(239, 68, 68, 0.3);
    }
    
    .modal-body {
        padding: 0.5rem 1.5rem 1.5rem 1.5rem;
    }
    
    .modal-highlight {
        display: inline-block;
        background: rgba(236, 72, 153, 0.15);
        color: #f0abfc;
        padding: 0.3rem 1rem;
        border-radius: 30px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-bottom: 1rem;
        border: 1px solid rgba(236, 72, 153, 0.3);
    }
    
    .modal-description {
        color: #cbd5e1;
        line-height: 1.7;
        margin-bottom: 1.5rem;
        font-size: 0.95rem;
    }
    
    .modal-tech {
        background: rgba(0, 0, 0, 0.3);
        padding: 1rem;
        border-radius: 20px;
        margin-bottom: 1.5rem;
    }
    
    .modal-tech strong {
        display: block;
        margin-bottom: 0.75rem;
        font-size: 0.85rem;
    }
    
    .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .modal-actions {
        margin-top: 1rem;
    }
    
    /* Scrollbar styling */
    .modal-container::-webkit-scrollbar {
        width: 6px;
    }
    
    .modal-container::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
    }
    
    .modal-container::-webkit-scrollbar-thumb {
        background: rgba(79, 70, 229, 0.5);
        border-radius: 10px;
    }
    
    @media (max-width: 640px) {
        .modal-title {
            font-size: 1.3rem;
        }
        
        .modal-header {
            padding: 1rem 1rem 0.5rem 1rem;
        }
        
        .modal-body {
            padding: 0.5rem 1rem 1.5rem 1rem;
        }
    }
`;

document.head.appendChild(modalStyles);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
});