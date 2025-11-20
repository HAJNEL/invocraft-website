import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  template: `
    <section class="faq" id="faq">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">FAQ</span>
          <h2 class="section-title">Frequently Asked<br><span class="gradient-text">Questions</span></h2>
          <p class="section-subtitle">Everything you need to know about InvoCraft</p>
        </div>

        <div class="faq-grid">
          <!-- Pricing & Billing -->
          <div class="faq-category">
            <h3 class="category-title">💰 Pricing & Billing</h3>
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>How much does InvoCraft cost?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>InvoCraft offers three pricing tiers: Starter at R299/month (up to 50 invoices, 20 clients), Professional at R599/month (unlimited invoices and clients), and Enterprise at R1,299/month (advanced features and priority support). All plans include a 14-day free trial with no credit card required.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>Can I change my plan anytime?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly. If you downgrade, you'll retain access to your current plan features until the next billing cycle.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>Is there a setup fee or hidden costs?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>No setup fees or hidden costs! The price you see is what you pay. All plans include secure payment processing, customer support, and all core features. Enterprise plans include additional premium support options.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Features & Functionality -->
          <div class="faq-category">
            <h3 class="category-title">⚡ Features & Functionality</h3>
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>What payment methods do you support?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>We support all major payment methods including credit cards (Visa, Mastercard, American Express), debit cards, bank transfers, and digital wallets. Enterprise customers can also set up multiple payment methods and recurring billing.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>Can I customize invoice templates?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>Absolutely! Professional and Enterprise plans include fully customizable invoice templates. You can add your logo, change colors, modify layouts, and include custom fields. Starter plans come with professionally designed templates that you can personalize.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>Does InvoCraft work on mobile devices?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>Yes! InvoCraft has a fully responsive web interface that works perfectly on all devices. Professional and Enterprise plans also include dedicated mobile apps for iOS and Android, allowing you to create invoices, send quotes, and track payments on the go.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Security & Data -->
          <div class="faq-category">
            <h3 class="category-title">🔒 Security & Data</h3>
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>Is my data secure?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>Your data security is our top priority. We use bank-level 256-bit SSL encryption, comply with PCI DSS standards, and store data in SOC 2 certified data centers. All data is backed up regularly, and we never share your information with third parties.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>Can I export my data?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>Yes, you can export all your data at any time. We provide CSV and PDF exports for invoices, clients, and financial reports. Enterprise customers also have access to our API for automated data synchronization.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>What happens to my data if I cancel?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>You can download all your data before canceling. We retain your data for 30 days after cancellation in case you change your mind. After that period, all data is permanently deleted from our systems in accordance with data protection regulations.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Support & Onboarding -->
          <div class="faq-category">
            <h3 class="category-title">🆘 Support & Onboarding</h3>
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>How do I get started?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>Getting started is easy! Sign up for a free trial, and you'll receive a welcome email with setup instructions. Our onboarding wizard will guide you through creating your first invoice. Professional and Enterprise customers get access to personalized onboarding sessions.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>What kind of support do you offer?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>All plans include email support. Professional plans add chat support, and Enterprise plans include priority phone support with dedicated account managers. Our average response time is under 2 hours for paid plans.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" (click)="toggleFaq($event)">
                  <span>Do you offer training or tutorials?</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer">
                  <p>Yes! We have comprehensive video tutorials, documentation, and webinars. Enterprise customers receive personalized training sessions. Our knowledge base is updated regularly with new features and best practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="contact-cta">
          <h3>Still have questions?</h3>
          <p>Can't find the answer you're looking for? Our support team is here to help.</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary">Contact Support</a>
            <a href="#" class="btn btn-outline">Schedule Demo</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq {
      padding: 6rem 0;
      background-color: var(--white);
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
      background-color: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      color: var(--primary);
      font-weight: 500;
      margin-bottom: var(--spacing-md);
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 900;
      color: var(--gray-900);
      margin-bottom: var(--spacing-md);
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
      max-width: 600px;
      margin: 0 auto;
    }

    .faq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
      margin-bottom: 4rem;
    }

    .faq-category {
      background: var(--gray-50);
      border-radius: var(--radius-xl);
      padding: 2rem;
    }

    .category-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--gray-900);
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .faq-accordion {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .faq-item {
      background: var(--white);
      border-radius: var(--radius-lg);
      border: 1px solid var(--gray-200);
      overflow: hidden;
    }

    .faq-question {
      width: 100%;
      padding: 1.25rem 1.5rem;
      background: none;
      border: none;
      text-align: left;
      font-size: 1rem;
      font-weight: 600;
      color: var(--gray-900);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all var(--transition-base);
    }

    .faq-question:hover {
      background-color: var(--gray-50);
    }

    .faq-question.active {
      background-color: var(--gray-50);
      color: var(--primary);
    }

    .faq-icon {
      width: 1.25rem;
      height: 1.25rem;
      stroke-width: 2;
      transition: transform var(--transition-base);
      color: var(--gray-500);
    }

    .faq-question.active .faq-icon {
      transform: rotate(180deg);
      color: var(--primary);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      background: var(--white);
    }

    .faq-answer p {
      margin: 0;
      padding: 0 1.5rem 1.25rem 1.5rem;
      color: var(--gray-700);
      line-height: 1.6;
    }

    .contact-cta {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      border-radius: var(--radius-xl);
      padding: 3rem;
      text-align: center;
      color: var(--white);
    }

    .contact-cta h3 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .contact-cta p {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.875rem 2rem;
      font-weight: 600;
      font-size: 0.875rem;
      text-decoration: none;
      border-radius: var(--radius-lg);
      transition: all var(--transition-base);
      cursor: pointer;
      border: 2px solid transparent;
      white-space: nowrap;
    }

    .btn-primary {
      background: var(--white);
      color: var(--primary);
      box-shadow: var(--shadow-md);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-xl);
    }

    .btn-outline {
      background-color: transparent;
      color: var(--white);
      border-color: var(--white);
    }

    .btn-outline:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: var(--white);
    }

    @media (max-width: 768px) {
      .faq-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .faq-category {
        padding: 1.5rem;
      }

      .contact-cta {
        padding: 2rem 1rem;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 100%;
        max-width: 300px;
      }
    }
  `]
})
export class FaqComponent {
  toggleFaq(event: Event) {
    const button = event.target as HTMLElement;
    const faqItem = button.closest('.faq-item') as HTMLElement;
    const answer = faqItem.querySelector('.faq-answer') as HTMLElement;

    // Close all other FAQ items
    const allFaqItems = faqItem.parentElement?.querySelectorAll('.faq-item') || [];
    allFaqItems.forEach((item) => {
      const itemAnswer = item.querySelector('.faq-answer') as HTMLElement;
      const itemButton = item.querySelector('.faq-question') as HTMLElement;
      if (item !== faqItem) {
        itemAnswer.style.maxHeight = '0';
        itemButton.classList.remove('active');
      }
    });

    // Toggle current FAQ item
    if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      button.classList.add('active');
    } else {
      answer.style.maxHeight = '0';
      button.classList.remove('active');
    }
  }
}
