// Shared footer component for all pages
function loadFooter() {
    const footerHTML = `
<!-- Footer -->
<section id="footer" class="footer">
    <footer>
        <div class="container">
            <div class="footer-content">
                <div>
                    <div class="footer-logo">
                        <img src="images/RR-CONSTRUCTION-JPEG-File--2.0.jpg" alt="RR Construction Logo">
                    </div>
                    <ul class="about-list">
                        <li>Licensed and fully insured company</li>
                        <li>Certainteed ShingleMaster certified</li>
                        <li>Experienced in all aspects of residential construction</li>
                        <li>Serving the central UP area</li>
                        <li>Quality materials and professional installation</li>
                    </ul>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/profile.php?id=61565725851595" class="social-link">f</a>
                        <a href="#" class="social-link">📷</a>
                    </div>
                </div>
                <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <div class="contact-details">
                        <h5>Our Location</h5>
                        <p>Curtis, Michigan, Upper Peninsula</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">✉️</div>
                    <div class="contact-details">
                        <h5>Email Us</h5>
                        <a href="mailto:info@rrconstructionup.com">info@rrconstructionup.com</a>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📱</div>
                    <div class="contact-details">
                        <h5>Call Us</h5>
                        <a href="tel:+19062860416">(906) 286-0416</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                &copy; 2025 RR Construction. All Rights Reserved.
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
