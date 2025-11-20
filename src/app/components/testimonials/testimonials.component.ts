import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  template: `<section class="testimonials" id="testimonials"><div class="container"><div class="section-header"><span class="section-badge">Testimonials</span><h2 class="section-title">Loved by Businesses<br><span class="gradient-text">Around the World</span></h2></div></div></section>`,
  styles: [`.testimonials { padding: 6rem 0; background: linear-gradient(180deg, var(--white) 0%, var(--gray-50) 100%); }`]
})
export class TestimonialsComponent {}
