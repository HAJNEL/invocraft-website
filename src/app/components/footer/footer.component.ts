import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer" id="contact">
      <div class="container">
        <div class="footer-content">
          <!-- Company Info -->
          <div class="footer-column">
            <div class="footer-logo">
              <svg class="logo-icon" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" stroke-width="2"/>
                <line x1="10" y1="16" x2="24" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="30" cy="26" r="8" fill="#1E3A8A"/>
              </svg>
              <span class="logo-text">InvoCraft</span>
            </div>
            <p class="footer-description">
              Professional invoice and quote management platform trusted by thousands of businesses worldwide. Streamline your billing, track payments, and grow your business with confidence.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Product -->
          <div class="footer-column">
            <h3 class="footer-heading">Product</h3>
            <ul class="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">API Documentation</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div class="footer-column">
            <h3 class="footer-heading">Company</h3>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Affiliates</a></li>
            </ul>
          </div>

          <!-- Support -->
          <div class="footer-column">
            <h3 class="footer-heading">Support</h3>
            <ul class="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">System Status</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>

          <!-- Legal -->
          <div class="footer-column">
            <h3 class="footer-heading">Legal</h3>
            <ul class="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR</a></li>
              <li><a href="#">Compliance</a></li>
              <li><a href="#">Licenses</a></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <h3 class="newsletter-heading">Stay Updated</h3>
          <p class="newsletter-description">Subscribe to our newsletter for the latest features, tips, and exclusive offers.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Enter your email" class="newsletter-input" />
            <button type="submit" class="newsletter-button">Subscribe</button>
          </form>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="footer-copyright">&copy; 2025 InvoCraft. All rights reserved.</p>
            <div class="footer-badges">
              <span class="badge">🔒 SSL Secured</span>
              <span class="badge">✓ PCI Compliant</span>
              <span class="badge">🌍 GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--gray-900);
      color: var(--gray-300);
      padding: 6rem 0 var(--spacing-lg);
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      gap: var(--spacing-xl);
      margin-bottom: 3rem;
    }

    .footer-column:first-child {
      grid-column: span 1;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      margin-bottom: var(--spacing-md);
    }

    .logo-icon {
      width: 40px;
      height: 40px;
      color: var(--primary);
    }

    .logo-text {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--white);
    }

    .footer-description {
      color: var(--gray-400);
      line-height: 1.7;
      margin-bottom: var(--spacing-lg);
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gray-400);
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background-color: var(--primary);
      color: var(--white);
      transform: translateY(-2px);
    }

    .social-link svg {
      width: 20px;
      height: 20px;
    }

    .footer-heading {
      font-size: 1rem;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.75rem;
    }

    .footer-links a {
      color: var(--gray-400);
      text-decoration: none;
      font-size: 0.9375rem;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: var(--primary-light);
    }

    .footer-newsletter {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 1rem;
      padding: 2rem;
      margin-bottom: 3rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .newsletter-heading {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 0.5rem;
    }

    .newsletter-description {
      color: var(--gray-400);
      margin-bottom: 1.5rem;
      font-size: 0.9375rem;
    }

    .newsletter-form {
      display: flex;
      gap: 0.75rem;
    }

    .newsletter-input {
      flex: 1;
      padding: 0.875rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 0.5rem;
      color: var(--white);
      font-size: 1rem;
      outline: none;
      transition: all 0.3s ease;
    }

    .newsletter-input::placeholder {
      color: var(--gray-500);
    }

    .newsletter-input:focus {
      background: rgba(255, 255, 255, 0.15);
      border-color: var(--primary-light);
    }

    .newsletter-button {
      padding: 0.875rem 1.75rem;
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      color: var(--white);
      border: none;
      border-radius: 0.5rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    .newsletter-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(30, 58, 138, 0.3);
    }

    .footer-bottom {
      padding-top: var(--spacing-lg);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--spacing-md);
    }

    .footer-copyright {
      font-size: 0.875rem;
      color: var(--gray-500);
    }

    .footer-badges {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .badge {
      font-size: 0.8125rem;
      color: var(--gray-400);
      padding: 0.375rem 0.75rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 0.375rem;
      display: flex;
      align-items: center;
      gap: 0.375rem;
    }

    @media (max-width: 1024px) {
      .footer-content {
        grid-template-columns: repeat(3, 1fr);
      }

      .footer-column:first-child {
        grid-column: span 3;
      }
    }

    @media (max-width: 768px) {
      .footer {
        padding: 3rem 0 var(--spacing-md);
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
        margin-bottom: 2rem;
      }

      .footer-column:first-child {
        grid-column: span 1;
        text-align: center;
      }

      .footer-logo {
        justify-content: center;
      }

      .footer-description {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
      }

      .social-links {
        justify-content: center;
      }

      .footer-column {
        text-align: center;
      }

      .footer-newsletter {
        padding: 1.5rem;
        text-align: center;
      }

      .newsletter-form {
        flex-direction: column;
      }

      .newsletter-button {
        width: 100%;
      }

      .footer-bottom-content {
        justify-content: center;
        text-align: center;
        flex-direction: column;
      }

      .footer-badges {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .footer {
        padding: 2rem 0 var(--spacing-sm);
      }

      .footer-content {
        gap: var(--spacing-md);
      }

      .logo-icon {
        width: 35px;
        height: 35px;
      }

      .logo-text {
        font-size: 1.125rem;
      }

      .footer-description {
        font-size: 0.875rem;
      }

      .social-link {
        width: 36px;
        height: 36px;
      }

      .social-link svg {
        width: 18px;
        height: 18px;
      }

      .footer-heading {
        font-size: 0.9375rem;
      }

      .footer-links a {
        font-size: 0.875rem;
      }

      .footer-newsletter {
        padding: 1.25rem;
      }

      .newsletter-heading {
        font-size: 1.125rem;
      }

      .newsletter-description {
        font-size: 0.875rem;
      }

      .newsletter-input,
      .newsletter-button {
        padding: 0.75rem 1rem;
        font-size: 0.9375rem;
      }

      .footer-copyright {
        font-size: 0.8125rem;
      }

      .footer-badges {
        gap: 0.5rem;
      }

      .badge {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
      }
    }
  `]
})
export class FooterComponent {}
