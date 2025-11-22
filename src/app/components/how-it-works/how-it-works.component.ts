import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  template: `
    <section class="how-it-works" id="how-it-works">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">How It Works</span>
          <h2 class="section-title">Get Started in<br><span class="gradient-text">Three Simple Steps</span></h2>
          <p class="section-subtitle">Experience seamless invoice management from setup to payment tracking. Our streamlined process gets you up and running in minutes.</p>
        </div>

        <div class="steps-container">
          <!-- Step 1 -->
          <div class="step-card">
            <div class="step-number">
              <span>01</span>
            </div>
            <div class="step-content">
              <div class="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 class="step-title">Create Your Account</h3>
              <p class="step-description">Sign up in seconds and customize your business profile with your logo, company details, and payment preferences. No credit card required for the free trial.</p>
              <ul class="step-features">
                <li>Quick 2-minute setup process</li>
                <li>Add your business branding</li>
                <li>Configure payment methods</li>
                <li>Set up tax and currency preferences</li>
              </ul>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="step-card">
            <div class="step-number">
              <span>02</span>
            </div>
            <div class="step-content">
              <div class="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h3 class="step-title">Create Professional Invoices</h3>
              <p class="step-description">Build beautiful, branded invoices using our intuitive editor. Add line items, apply taxes, include payment terms, and customize everything to match your brand.</p>
              <ul class="step-features">
                <li>Professional invoice templates</li>
                <li>Automatic calculation of totals and taxes</li>
                <li>Attach files and documents</li>
                <li>Save as drafts or send immediately</li>
              </ul>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="step-card">
            <div class="step-number">
              <span>03</span>
            </div>
            <div class="step-content">
              <div class="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3 class="step-title">Track & Get Paid</h3>
              <p class="step-description">Monitor invoice status in real-time, send automated reminders, and receive payments directly. Our dashboard gives you complete visibility into your cash flow.</p>
              <ul class="step-features">
                <li>Real-time payment tracking</li>
                <li>Automated payment reminders</li>
                <li>Detailed analytics and reports</li>
                <li>Secure payment processing</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="how-it-works-cta">
          <h3>Ready to streamline your invoicing?</h3>
          <p>Join thousands of businesses already using InvoCraft to manage their finances efficiently.</p>
          <button class="cta-button">Start Your Free Trial</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .how-it-works {
      padding: 6rem 0;
      background: linear-gradient(180deg, var(--white) 0%, var(--gray-50) 100%);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: rgba(30, 58, 138, 0.1);
      border: 1px solid rgba(30, 58, 138, 0.2);
      border-radius: 9999px;
      font-size: 0.875rem;
      color: var(--primary);
      font-weight: 600;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 900;
      color: var(--gray-900);
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .gradient-text {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-subtitle {
      font-size: 1.125rem;
      color: var(--gray-600);
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.7;
    }

    .steps-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .step-card {
      background: var(--white);
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border: 1px solid var(--gray-200);
      position: relative;
    }

    .step-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      border-color: var(--primary-light);
    }

    .step-number {
      position: absolute;
      top: -1rem;
      left: 2rem;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: var(--white);
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.125rem;
      box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
    }

    .step-content {
      padding-top: 1.5rem;
    }

    .step-icon {
      width: 3.5rem;
      height: 3.5rem;
      background: linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%);
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
    }

    .step-icon svg {
      width: 2rem;
      height: 2rem;
      color: var(--primary);
    }

    .step-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--gray-900);
      margin-bottom: 1rem;
    }

    .step-description {
      font-size: 1rem;
      color: var(--gray-600);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .step-features {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .step-features li {
      font-size: 0.9375rem;
      color: var(--gray-700);
      padding: 0.5rem 0;
      padding-left: 1.75rem;
      position: relative;
    }

    .step-features li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--secondary);
      font-weight: 700;
      font-size: 1.125rem;
    }

    .how-it-works-cta {
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      color: var(--white);
      text-align: center;
      padding: 3rem 2rem;
      border-radius: 1rem;
      box-shadow: 0 20px 25px -5px rgba(30, 58, 138, 0.2);
    }

    .how-it-works-cta h3 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .how-it-works-cta p {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      opacity: 0.95;
    }

    .cta-button {
      background: var(--white);
      color: var(--primary);
      padding: 1rem 2.5rem;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 768px) {
      .how-it-works {
        padding: 4rem 0;
      }

      .section-title {
        font-size: 2rem;
      }

      .section-subtitle {
        font-size: 1rem;
      }

      .steps-container {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      .step-card {
        padding: 1.5rem;
      }

      .step-title {
        font-size: 1.25rem;
      }

      .step-description {
        font-size: 0.9375rem;
      }

      .how-it-works-cta {
        padding: 2rem 1.5rem;
      }

      .how-it-works-cta h3 {
        font-size: 1.5rem;
      }

      .how-it-works-cta p {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .how-it-works {
        padding: 3rem 0;
      }

      .section-title {
        font-size: 1.75rem;
      }

      .section-badge {
        font-size: 0.75rem;
        padding: 0.375rem 0.75rem;
      }

      .step-number {
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1rem;
      }

      .step-icon {
        width: 3rem;
        height: 3rem;
      }

      .step-icon svg {
        width: 1.5rem;
        height: 1.5rem;
      }

      .cta-button {
        width: 100%;
        max-width: 300px;
      }
    }
  `]
})
export class HowItWorksComponent {}
