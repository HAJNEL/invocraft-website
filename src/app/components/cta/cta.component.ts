import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  template: `
    <section class="cta-section">
      <!-- Background Pattern -->
      <div class="cta-background">
        <div class="pattern-dots"></div>
        <div class="pattern-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>

      <div class="container">
        <div class="cta-content" appAnimateOnScroll>
          <!-- Main CTA -->
          <div class="cta-main">
            <h2 class="cta-title">
              Ready to Transform Your<br>
              <span class="gradient-text">Invoicing Workflow?</span>
            </h2>
            <p class="cta-subtitle">
              Join thousands of businesses already saving time and getting paid faster with InvoCraft.
            </p>

            <!-- Key Benefits -->
            <div class="cta-benefits">
              <div class="benefit-item">
                <div class="benefit-icon">⚡</div>
                <span>Get started in under 5 minutes</span>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon">🔒</div>
                <span>14-day free trial, no credit card required</span>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon">🚀</div>
                <span>Cancel anytime, no setup fees</span>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="cta-buttons">
              <a href="#" class="btn btn-primary btn-large">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                </svg>
                Start Free Trial
              </a>
              <a href="#" class="btn btn-outline-white btn-large">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Schedule Demo
              </a>
            </div>
          </div>

          <!-- Newsletter Signup -->
          <div class="cta-newsletter">
            <h3 class="newsletter-title">Stay Updated</h3>
            <p class="newsletter-subtitle">Get the latest features and business tips delivered to your inbox.</p>
            <form class="newsletter-form" (ngSubmit)="onNewsletterSubmit($event)">
              <div class="form-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  class="newsletter-input"
                  [(ngModel)]="email"
                  name="email"
                  required
                >
                <button type="submit" class="btn btn-secondary">
                  Subscribe
                </button>
              </div>
              <p class="newsletter-note">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: var(--white);
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
      margin-top: 4rem;
    }

    .cta-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }

    .pattern-dots {
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 200px;
      height: 200px;
      background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
      background-size: 20px 20px;
      border-radius: 50%;
      opacity: 0.3;
    }

    .pattern-shapes {
      position: absolute;
      bottom: -2rem;
      left: -2rem;
      right: 0;
      top: 0;
      pointer-events: none;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
    }

    .shape-1 {
      width: 300px;
      height: 300px;
      top: 10%;
      right: 10%;
      animation: float 6s ease-in-out infinite;
    }

    .shape-2 {
      width: 150px;
      height: 150px;
      bottom: 20%;
      left: 15%;
      animation: float 8s ease-in-out infinite reverse;
    }

    .shape-3 {
      width: 100px;
      height: 100px;
      top: 60%;
      right: 25%;
      animation: float 10s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      position: relative;
      z-index: 1;
    }

    .cta-content {
      text-align: center;
    }

    .cta-main {
      margin-bottom: 4rem;
    }

    .cta-title {
      font-size: 3rem;
      font-weight: 900;
      line-height: 1.2;
      margin-bottom: 1rem;
      color: var(--white);
    }

    .gradient-text {
      background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .cta-subtitle {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-benefits {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .benefit-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: rgba(255, 255, 255, 0.9);
      font-size: 1rem;
      font-weight: 500;
    }

    .benefit-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      border-radius: var(--radius-lg);
      transition: all var(--transition-base);
      cursor: pointer;
      border: 2px solid transparent;
      white-space: nowrap;
      position: relative;
      overflow: hidden;
    }

    .btn-icon {
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
    }

    .btn-primary {
      background: var(--white);
      color: var(--primary);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    }

    .btn-outline-white {
      background-color: transparent;
      border-color: rgba(255, 255, 255, 0.3);
      color: var(--white);
    }

    .btn-outline-white:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: var(--white);
      border-color: rgba(255, 255, 255, 0.3);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
    }

    .cta-trust {
      margin-bottom: 4rem;
    }

    .trust-stats {
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 900;
      color: var(--white);
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
    }

    .trust-badges {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-full);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .badge-icon {
      font-size: 1rem;
    }

    .badge-text {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }

    .cta-newsletter {
      background: rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-xl);
      padding: 2rem;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .newsletter-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 0.5rem;
    }

    .newsletter-subtitle {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 1.5rem;
    }

    .newsletter-form {
      max-width: 500px;
      margin: 0 auto;
    }

    .form-group {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .newsletter-input {
      flex: 1;
      padding: 0.875rem 1rem;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-lg);
      background: rgba(255, 255, 255, 0.1);
      color: var(--white);
      font-size: 1rem;
      outline: none;
      transition: all var(--transition-base);
    }

    .newsletter-input::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    .newsletter-input:focus {
      border-color: rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.15);
    }

    .newsletter-note {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.6);
      text-align: center;
      margin: 0;
    }

    @media (max-width: 768px) {
      .cta-section {
        padding: 3rem 0;
        margin-top: 3rem;
      }

      .cta-main {
        margin-bottom: 3rem;
      }

      .cta-title {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .cta-subtitle {
        font-size: 1.125rem;
        margin-bottom: 1.5rem;
      }

      .cta-benefits {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .benefit-item {
        justify-content: flex-start;
        width: 100%;
        font-size: 0.9375rem;
      }

      .benefit-icon {
        font-size: 1.25rem;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: stretch;
        gap: 0.75rem;
        margin-bottom: 2rem;
      }

      .btn {
        width: 100%;
        justify-content: center;
      }

      .cta-trust {
        margin-bottom: 3rem;
      }

      .trust-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem 1rem;
      }

      .stat-number {
        font-size: 1.75rem;
      }

      .stat-label {
        font-size: 0.8125rem;
      }

      .trust-badges {
        flex-direction: column;
        align-items: stretch;
        gap: 0.75rem;
      }

      .badge {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        justify-content: center;
      }

      .cta-newsletter {
        padding: 1.5rem;
      }

      .newsletter-title {
        font-size: 1.25rem;
      }

      .newsletter-subtitle {
        font-size: 0.9375rem;
      }

      .form-group {
        flex-direction: column;
        gap: 0.75rem;
      }

      .newsletter-input {
        width: 100%;
      }

      .btn-secondary {
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .cta-section {
        padding: 2.5rem 0;
      }

      .cta-title {
        font-size: 1.75rem;
      }

      .cta-subtitle {
        font-size: 1rem;
      }

      .benefit-item {
        font-size: 0.875rem;
      }

      .btn {
        padding: 0.875rem 1.5rem;
        font-size: 0.9375rem;
      }

      .trust-stats {
        gap: 1rem 0.75rem;
      }

      .stat-number {
        font-size: 1.5rem;
      }

      .stat-label {
        font-size: 0.75rem;
      }

      .badge {
        padding: 0.375rem 0.875rem;
        font-size: 0.8125rem;
      }

      .badge-icon {
        font-size: 0.875rem;
      }

      .cta-newsletter {
        padding: 1.25rem;
      }

      .newsletter-title {
        font-size: 1.125rem;
      }

      .newsletter-subtitle {
        font-size: 0.875rem;
        margin-bottom: 1.25rem;
      }

      .pattern-dots {
        display: none;
      }

      .shape {
        opacity: 0.3;
      }
    }
  `]
})
export class CtaComponent {
  email: string = '';

  onNewsletterSubmit(event: Event) {
    event.preventDefault();
    if (this.email) {
      // Here you would typically send the email to your backend
      console.log('Newsletter signup:', this.email);
      alert('Thank you for subscribing! We\'ll keep you updated with the latest features.');
      this.email = '';
    }
  }
}
