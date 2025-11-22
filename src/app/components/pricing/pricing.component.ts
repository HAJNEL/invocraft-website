import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  template: `
    <section class="pricing-container" id="pricing">
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1 class="title">Choose Your Plan</h1>
          <p class="subtitle">
            Select the perfect plan for your business needs
          </p>
          <p class="trial-note">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>

        <!-- Pricing Cards -->
        <div class="pricing-grid">
          <!-- Starter Plan -->
          <div class="pricing-card">
            <div class="card-content">
              <!-- Plan Icon -->
              <div class="plan-icon starter-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>

              <!-- Plan Name -->
              <h2 class="plan-name">Starter</h2>

              <!-- Plan Description -->
              <p class="plan-description">
                Perfect for freelancers and small businesses just getting started
              </p>

              <!-- Pricing -->
              <div class="pricing">
                <span class="price">R 299</span>
                <span class="period">/month</span>
              </div>

              <!-- Billing Note -->
              <p class="billing-note">Billed monthly</p>

              <!-- Features List -->
              <ul class="features-list">
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Up to 50 invoices per month
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Up to 20 clients
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Invoice creation & management
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Quote creation & management
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Client management
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  PDF export
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Payment tracking & recording
                </li>
              </ul>

              <!-- Action Button -->
              <button class="cta-button outline">Get Started</button>
            </div>
          </div>

          <!-- Professional Plan -->
          <div class="pricing-card featured">
            <!-- Popular Badge -->
            <div class="popular-badge">
              <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              MOST POPULAR
            </div>

            <div class="card-content">
              <!-- Plan Icon -->
              <div class="plan-icon professional-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>

              <!-- Plan Name -->
              <h2 class="plan-name">Professional</h2>

              <!-- Plan Description -->
              <p class="plan-description">
                For growing businesses that need more power and flexibility
              </p>

              <!-- Pricing -->
              <div class="pricing">
                <span class="price">R 599</span>
                <span class="period">/month</span>
              </div>

              <!-- Billing Note -->
              <p class="billing-note">Billed monthly</p>

              <!-- Features List -->
              <ul class="features-list">
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Unlimited invoices & quotes
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Unlimited clients
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Quote to invoice conversion
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Invoice sharing portal
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Quote approval workflow
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Advanced analytics dashboard
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Activity timeline tracking
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Item completion tracking
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Email & print support
                </li>
              </ul>

              <!-- Action Button -->
              <button class="cta-button primary">Start Free Trial</button>
            </div>
          </div>

          <!-- Enterprise Plan -->
          <div class="pricing-card">
            <div class="card-content">
              <!-- Plan Icon -->
              <div class="plan-icon enterprise-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
              </div>

              <!-- Plan Name -->
              <h2 class="plan-name">Enterprise</h2>

              <!-- Plan Description -->
              <p class="plan-description">
                Advanced features and dedicated support for large organizations
              </p>

              <!-- Pricing -->
              <div class="pricing">
                <span class="price">R 1,299</span>
                <span class="period">/month</span>
              </div>

              <!-- Billing Note -->
              <p class="billing-note">Billed monthly</p>

              <!-- Features List -->
              <ul class="features-list">
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Everything in Professional
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  VAT registration support
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Multiple payment methods
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Public invoice portal
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Client portal for quotes
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Invoice duplication
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Quote duplication
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Dark/Light theme support
                </li>
                <li class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Priority support
                </li>
              </ul>

              <!-- Action Button -->
              <button class="cta-button outline">Contact Sales</button>
            </div>
          </div>
        </div>

        <!-- Additional Information -->
        <div class="additional-info">
          <h3 class="info-title">All Plans Include</h3>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-icon">🔒</div>
              <h4>Secure Payments</h4>
              <p>Bank-level security with Stitch Money integration</p>
            </div>
            <div class="info-item">
              <div class="info-icon">⚡</div>
              <h4>Easy Setup</h4>
              <p>Get started in minutes with our intuitive interface</p>
            </div>
            <div class="info-item">
              <div class="info-icon">🚫</div>
              <h4>Cancel Anytime</h4>
              <p>No long-term contracts or cancellation fees</p>
            </div>
          </div>
        </div>

        <!-- Custom Plan Section -->
        <div class="custom-plan">
          <h3>Need a Custom Plan?</h3>
          <p>
            If you need a custom solution tailored to your specific requirements,
            our team is here to help. Contact us to discuss your needs.
          </p>
          <button class="cta-button outline">Contact Sales</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pricing-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 2rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .title {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #1e90ff, #0066cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      font-size: 1.125rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto 0.5rem;
    }

    .trial-note {
      font-size: 0.875rem;
      color: #888;
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .pricing-card {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .pricing-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 45px rgba(30, 144, 255, 0.2);
    }

    .pricing-card.featured {
      border: 3px solid #1e90ff;
      box-shadow: 0 10px 40px rgba(30, 144, 255, 0.3);
      transform: scale(1.05);
    }

    .pricing-card.featured:hover {
      transform: scale(1.05) translateY(-4px);
      box-shadow: 0 20px 60px rgba(30, 144, 255, 0.4);
    }

    .popular-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #1e90ff;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      box-shadow: 0 4px 12px rgba(30, 144, 255, 0.4);
      z-index: 1;
    }

    .star-icon {
      width: 1rem;
      height: 1rem;
    }

    .card-content {
      padding: 2rem;
    }

    .plan-icon {
      width: 5rem;
      height: 5rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: white;
      font-size: 2rem;
    }

    .starter-icon {
      background: linear-gradient(135deg, #667eea, #764ba2);
    }

    .professional-icon {
      background: linear-gradient(135deg, #1e90ff, #0066cc);
    }

    .enterprise-icon {
      background: linear-gradient(135deg, #667eea, #764ba2);
    }

    .plan-name {
      font-size: 1.5rem;
      font-weight: 800;
      color: #1a1a2e;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    .plan-description {
      color: #666;
      text-align: center;
      font-size: 0.875rem;
      margin-bottom: 2rem;
      min-height: 2.5rem;
    }

    .pricing {
      text-align: center;
      margin-bottom: 2rem;
    }

    .price {
      font-size: 2.5rem;
      font-weight: 800;
      color: #1e90ff;
    }

    .period {
      font-size: 1rem;
      color: #888;
      font-weight: 500;
    }

    .billing-note {
      font-size: 0.75rem;
      color: #666;
      margin-bottom: 1rem;
      text-align: center;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.5rem 0;
      font-size: 0.875rem;
      color: #444;
    }

    .check-icon {
      width: 1.25rem;
      height: 1.25rem;
      color: #4caf50;
      flex-shrink: 0;
    }

    .cta-button {
      width: 100%;
      padding: 1rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 700;
      text-transform: none;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .cta-button.primary {
      background: linear-gradient(135deg, #1e90ff, #0066cc);
      color: white;
      box-shadow: 0 4px 15px rgba(30, 144, 255, 0.4);
    }

    .cta-button.primary:hover {
      background: linear-gradient(135deg, #0066cc, #004499);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(30, 144, 255, 0.6);
    }

    .cta-button.outline {
      background: transparent;
      color: #1e90ff;
      border-color: #1e90ff;
    }

    .cta-button.outline:hover {
      background: rgba(30, 144, 255, 0.1);
      border-color: #0066cc;
      color: #0066cc;
    }

    .additional-info {
      background: rgba(255, 255, 255, 0.9);
      border-radius: 1rem;
      padding: 3rem;
      text-align: center;
      margin-bottom: 3rem;
    }

    .info-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
      color: #1a1a2e;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .info-item {
      text-align: center;
    }

    .info-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .info-item h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1a1a2e;
      margin-bottom: 0.5rem;
    }

    .info-item p {
      color: #666;
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .custom-plan {
      background: rgba(255, 255, 255, 0.9);
      border-radius: 1rem;
      padding: 3rem;
      text-align: center;
    }

    .custom-plan h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 1rem;
    }

    .custom-plan p {
      color: #666;
      font-size: 0.875rem;
      line-height: 1.5;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 768px) {
      .pricing-container {
        padding: 1.5rem 0;
      }

      .pricing-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .pricing-card.featured {
        transform: none;
        order: -1;
        border-width: 2px;
      }

      .pricing-card:hover {
        transform: translateY(-2px);
      }

      .title {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      .popular-badge {
        top: 0.75rem;
        right: 0.75rem;
        padding: 0.375rem 0.875rem;
        font-size: 0.7rem;
      }

      .card-content {
        padding: 1.5rem;
      }

      .plan-icon {
        width: 4rem;
        height: 4rem;
        margin-bottom: 1rem;
      }

      .plan-name {
        font-size: 1.25rem;
      }

      .plan-description {
        font-size: 0.8125rem;
      }

      .price {
        font-size: 2rem;
      }

      .period {
        font-size: 0.875rem;
      }

      .feature-item {
        font-size: 0.8125rem;
        padding: 0.375rem 0;
      }

      .check-icon {
        width: 1rem;
        height: 1rem;
      }

      .cta-button {
        padding: 0.875rem;
        font-size: 0.9375rem;
      }

      .additional-info,
      .custom-plan {
        padding: 2rem 1rem;
      }

      .info-title {
        font-size: 1.25rem;
      }

      .info-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .info-icon {
        font-size: 2.5rem;
      }

      .info-item h4 {
        font-size: 1.125rem;
      }

      .custom-plan h3 {
        font-size: 1.25rem;
      }

      .custom-plan p {
        font-size: 0.8125rem;
      }

      .custom-plan .cta-button {
        max-width: 100%;
      }
    }

    @media (max-width: 480px) {
      .title {
        font-size: 1.75rem;
      }

      .card-content {
        padding: 1.25rem;
      }

      .plan-icon {
        width: 3.5rem;
        height: 3.5rem;
      }

      .price {
        font-size: 1.75rem;
      }

      .additional-info,
      .custom-plan {
        padding: 1.5rem 0.75rem;
      }
    }
  `]
})
export class PricingComponent {}
