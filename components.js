// components.js - Master Navigation and Footer for Chessboard Capital

const navigationHTML = `
    <div class="nav-container">
        <div class="logo">
            <img src="chessboard-logo.png" alt="Chessboard Capital" />
        </div>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="index.html#products">Capital Strategies</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
            <a href="https://forms.gle/qJqgrJTHYVdExTB1A" target="_blank" style="color: var(--accent-gold); font-weight: 600;">Request Term Sheet</a>
        </div>
    </div>
`;

const footerHTML = `
    <div class="footer-content">
        <div class="footer-column">
            <h4>Capital Strategies</h4>
            <a href="construction.html">Construction Loans</a>
            <a href="adc.html">ADC Loans</a>
            <a href="bridge.html">Bridge Loans</a>
            <a href="renovation.html">Renovation Loans</a>
            <a href="equity.html">JV Equity</a>
        </div>
        <div class="footer-column">
            <h4>Company</h4>
            <a href="about.html">About Us</a>
            <a href="success_stories.html">Success Stories</a>
        </div>
        <div class="footer-column">
            <h4>Resources</h4>
            <a href="index.html#faq">FAQ</a>
            <a href="index.html#blog">Market Insights</a>
        </div>
        <div class="footer-column">
            <h4>Connect</h4>
            <a href="contact.html">Contact Us</a>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Chessboard Capital. All rights reserved.</p>
        <div class="footer-legal">
            © Chessboard Capital, Inc. Chessboard Capital, LLC 2026 All Rights Reserved. Chessboard Capital, LLC is licensed with the California Department of Financial Protection and Innovation. In California, all loans are made or arranged by Chessboard Capital, LLC pursuant to a California Finance Lenders Law license No. 60DBO-201383 (NMLS ID No. 2672032). Chessboard Capital, Inc. is licensed with the California Department of Real Estate under license no. 01919762. Please visit www.nmlsconsumeraccess.org for more licensing information. All Chessboard Capital companies make loans only for business or commercial purposes and not for personal, family, or household purposes. Loan product availability may be limited in certain states. This is not a commitment to lend. All loans are subject to borrower underwriting and credit approval, at Chessboard Capital's sole and absolute discretion. Rates, fees and related terms are subject to change at any time without notice, and may vary among borrowers, depending on a variety of matters. Other restrictions may apply.
        </div>
    </div>
`;

// Inject the components when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const navElement = document.querySelector('nav');
    const footerElement = document.querySelector('footer');
    
    if (navElement) navElement.innerHTML = navigationHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;

    // Maintain "active" class logic if needed for the current page
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
