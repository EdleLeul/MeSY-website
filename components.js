// Component Loader System
class ComponentLoader {
    constructor() {
        this.componentsLoaded = false;
    }

    // Load header and footer components
    loadComponents() {
        if (this.componentsLoaded) return;

        // Load header
        this.loadComponent('header-placeholder', this.getHeaderHTML());
        
        // Load footer
        this.loadComponent('footer-placeholder', this.getFooterHTML());
        
        this.componentsLoaded = true;
        
        // Initialize components after a short delay
        setTimeout(() => {
            this.initializeComponents();
        }, 100);
    }

    // Load component into placeholder
    loadComponent(placeholderId, html) {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            placeholder.innerHTML = html;
        }
    }

    // Get header HTML
    getHeaderHTML() {
        return `
            <header id="header">
                <div class="container">
                    <nav>
                        <div class="logo">
                            <img src="logo.png" alt="MeSY Logo">
                            <div class="logo-text">MeSY <span>Ethiopia</span></div>
                        </div>
                        <div class="menu-toggle">☰</div>
                        <ul class="nav-links">
                            <li><a href="index.html" class="active">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="projects.html">Projects</a></li>
                            <li><a href="members.html">Members</a></li>
                            <li><a href="resources.html">Resources</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }

    // Get footer HTML
    getFooterHTML() {
        return `
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-logo">
                            <div class="logo-text">MeSY <span>Ethiopia</span></div>
                        </div>
                        <p>Empowering Ethiopia's youth with creativity, critical thinking, and media smarts</p>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>© 2025 Media Smart Youth Ethiopia</p>
                    </div>
                </div>
            </footer>
        `;
    }

    // Initialize components functionality
    initializeComponents() {
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                document.querySelector('.nav-links').classList.toggle('active');
            });
        }

        // Header scroll behavior
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (header && window.scrollY > 50) {
                header.classList.add('scrolled');
            } else if (header) {
                header.classList.remove('scrolled');
            }
        });

        // Active nav highlighting
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });
    }
}

// Create global instance
window.ComponentLoader = new ComponentLoader();

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.ComponentLoader.loadComponents();
});
