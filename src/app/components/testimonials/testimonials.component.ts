import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  template: `
    <section class="testimonials" id="testimonials">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Testimonials</span>
          <h2 class="section-title">Loved by Businesses<br><span class="gradient-text">Around the World</span></h2>
          <p class="section-subtitle">See what our customers say about their experience with InvoCraft</p>
        </div>

        <div class="testimonials-grid">
          <!-- Testimonial 1 -->
          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="rating">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
              <blockquote class="testimonial-quote">
                "InvoCraft has transformed how we handle our invoicing. The professional templates and automated reminders have saved us countless hours. Our cash flow has improved significantly since we started using it."
              </blockquote>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <span class="avatar-initials">SJ</span>
              </div>
              <div class="author-info">
                <h4 class="author-name">Sarah Johnson</h4>
                <p class="author-role">CEO, TechStart Solutions</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="testimonial-card featured">
            <div class="testimonial-content">
              <div class="rating">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
              <blockquote class="testimonial-quote">
                "As a growing marketing agency, we needed a reliable invoicing system that could scale with us. InvoCraft delivered beyond our expectations. The client portal and quote-to-invoice conversion features are game-changers."
              </blockquote>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <span class="avatar-initials">MR</span>
              </div>
              <div class="author-info">
                <h4 class="author-name">Michael Rodriguez</h4>
                <p class="author-role">Founder, Creative Minds Agency</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="rating">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
              <blockquote class="testimonial-quote">
                "The analytics dashboard gives us incredible insights into our business performance. We can track payment trends, overdue invoices, and optimize our cash flow. Customer support is also top-notch."
              </blockquote>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <span class="avatar-initials">AL</span>
              </div>
              <div class="author-info">
                <h4 class="author-name">Amanda Lee</h4>
                <p class="author-role">CFO, Urban Design Studio</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 4 -->
          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="rating">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
              <blockquote class="testimonial-quote">
                "Switching to InvoCraft was one of the best business decisions we've made. The interface is intuitive, the features are comprehensive, and it integrates perfectly with our existing workflow."
              </blockquote>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <span class="avatar-initials">DK</span>
              </div>
              <div class="author-info">
                <h4 class="author-name">David Kim</h4>
                <p class="author-role">Operations Manager, GreenTech Industries</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 5 -->
          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="rating">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
              <blockquote class="testimonial-quote">
                "The mobile app is fantastic for on-the-go invoice management. I can create quotes, send invoices, and track payments from anywhere. It's made our field sales team much more efficient."
              </blockquote>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <span class="avatar-initials">RP</span>
              </div>
              <div class="author-info">
                <h4 class="author-name">Rachel Patel</h4>
                <p class="author-role">Sales Director, Metro Construction</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 6 -->
          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="rating">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
              <blockquote class="testimonial-quote">
                "InvoCraft's enterprise features have been perfect for our growing team. Multi-user access, advanced reporting, and priority support have helped us scale our operations smoothly."
              </blockquote>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <span class="avatar-initials">JT</span>
              </div>
              <div class="author-info">
                <h4 class="author-name">James Thompson</h4>
                <p class="author-role">VP Finance, Global Logistics Corp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
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

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .testimonial-card {
      background: var(--white);
      border-radius: var(--radius-xl);
      padding: 2rem;
      box-shadow: var(--shadow-md);
      transition: all var(--transition-base);
      border: 1px solid var(--gray-100);
    }

    .testimonial-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
    }

    .testimonial-card.featured {
      border-color: var(--primary);
      box-shadow: var(--shadow-lg);
      position: relative;
    }

    .testimonial-card.featured::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    }

    .testimonial-content {
      margin-bottom: 1.5rem;
    }

    .rating {
      margin-bottom: 1rem;
    }

    .star {
      color: #fbbf24;
      font-size: 1.25rem;
      margin-right: 0.125rem;
    }

    .testimonial-quote {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--gray-700);
      font-style: italic;
      margin: 0;
      position: relative;
    }

    .testimonial-quote::before {
      content: '"';
      font-size: 3rem;
      color: var(--primary);
      position: absolute;
      top: -0.5rem;
      left: -1rem;
      font-family: serif;
      opacity: 0.3;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .author-avatar {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .avatar-initials {
      color: var(--white);
      font-weight: 700;
      font-size: 0.875rem;
    }

    .author-info h4 {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      color: var(--gray-900);
    }

    .author-role {
      margin: 0;
      font-size: 0.875rem;
      color: var(--gray-600);
    }

    .stats-section {
      background: var(--white);
      border-radius: var(--radius-xl);
      padding: 3rem;
      box-shadow: var(--shadow-md);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      text-align: center;
    }

    .stat-item {
      padding: 1rem;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 900;
      color: var(--primary);
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stat-label {
      font-size: 1rem;
      color: var(--gray-600);
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .testimonials {
        padding: 4rem 0;
      }

      .section-header {
        margin-bottom: 3rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .section-subtitle {
        font-size: 1rem;
      }

      .testimonials-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .testimonial-card {
        padding: 1.5rem;
      }

      .testimonial-quote {
        font-size: 0.9375rem;
      }

      .author-info h4 {
        font-size: 0.9375rem;
      }

      .author-role {
        font-size: 0.8125rem;
      }

      .stats-section {
        padding: 2rem 1rem;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }

      .stat-number {
        font-size: 2rem;
      }

      .stat-label {
        font-size: 0.9375rem;
      }
    }

    @media (max-width: 480px) {
      .testimonials {
        padding: 3rem 0;
      }

      .section-title {
        font-size: 1.75rem;
      }

      .section-badge {
        font-size: 0.75rem;
        padding: 0.375rem 0.75rem;
      }

      .testimonial-card {
        padding: 1.25rem;
      }

      .testimonial-quote {
        font-size: 0.875rem;
        line-height: 1.5;
      }

      .testimonial-quote::before {
        font-size: 2.5rem;
        left: -0.5rem;
      }

      .author-avatar {
        width: 2.5rem;
        height: 2.5rem;
      }

      .avatar-initials {
        font-size: 0.75rem;
      }

      .star {
        font-size: 1rem;
      }

      .stats-section {
        padding: 1.5rem 0.75rem;
        gap: 1rem;
      }

      .stat-item {
        padding: 0.5rem;
      }

      .stat-number {
        font-size: 1.5rem;
      }

      .stat-label {
        font-size: 0.8125rem;
      }
    }
  `]
})
export class TestimonialsComponent {}
