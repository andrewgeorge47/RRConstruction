// Shared footer component for all pages
function loadFooter() {
    const footerHTML = `
<!-- Footer -->
<section id="footer" class="footer">
    <footer>
        <div class="container">
            <div class="footer-content">
                <!-- Company Info Column -->
                <div class="footer-column">
                    <div class="footer-logo">
                        <img src="images/RR-CONSTRUCTION-JPEG-File--2.0.jpg" alt="RR Construction Logo">
                        <h3>RR Construction</h3>
                    </div>
                    <p class="footer-desc">Your trusted partner for quality construction in Michigan's Upper Peninsula. Licensed, insured, and committed to excellence.</p>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/profile.php?id=61565725851595" target="_blank" rel="noopener" class="social-link" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://g.page/r/CUeRXYMR3sfaEBM/review" target="_blank" rel="noopener" class="social-link" aria-label="Google Reviews">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links Column -->
                <div class="footer-column">
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="index.html#home">Home</a></li>
                        <li><a href="index.html#services">Our Services</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="index.html#contact">Get a Quote</a></li>
                        <li><a href="https://g.page/r/CUeRXYMR3sfaEBM/review" target="_blank" rel="noopener">Leave a Review</a></li>
                    </ul>
                </div>

                <!-- Services Column -->
                <div class="footer-column">
                    <h4 class="footer-heading">Our Services</h4>
                    <ul class="footer-links">
                        <li><a href="index.html#services">Roofing</a></li>
                        <li><a href="index.html#services">Siding Installation</a></li>
                        <li><a href="index.html#services">Garage Construction</a></li>
                        <li><a href="index.html#services">Window Replacement</a></li>
                        <li><a href="index.html#services">Interior Remodeling</a></li>
                        <li><a href="index.html#services">New Construction</a></li>
                    </ul>
                </div>

                <!-- Contact Info Column -->
                <div class="footer-column">
                    <h4 class="footer-heading">Contact Us</h4>
                    <div class="footer-contact-info">
                        <div class="footer-contact-item">
                            <div class="footer-contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div class="footer-contact-details">
                                <strong>Curtis, Michigan</strong>
                                <p>Upper Peninsula</p>
                            </div>
                        </div>
                        <div class="footer-contact-item">
                            <div class="footer-contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div class="footer-contact-details">
                                <a href="tel:+19062860416"><strong>(906) 286-0416</strong></a>
                                <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                        <div class="footer-contact-item">
                            <div class="footer-contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div class="footer-contact-details">
                                <a href="mailto:info@rrconstructionup.com"><strong>info@rrconstructionup.com</strong></a>
                                <p>We respond within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <p>&copy; 2025 RR Construction. All Rights Reserved. | Licensed & Insured General Contractor | Serving Michigan's Upper Peninsula</p>
            </div>
        </div>
    </footer>
</section>
    `;

    // Find the footer placeholder and replace it
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }
}

// Load footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}
