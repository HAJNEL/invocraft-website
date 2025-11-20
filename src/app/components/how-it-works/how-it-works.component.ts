import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  template: `<section class="how-it-works" id="how-it-works"><div class="container"><div class="section-header"><span class="section-badge">How It Works</span><h2 class="section-title">Get Started in<br><span class="gradient-text">Three Simple Steps</span></h2><p class="section-subtitle">From signup to your first invoice in minutes.</p></div></div></section>`,
  styles: [`.how-it-works { padding: 6rem 0; background: linear-gradient(180deg, var(--white) 0%, var(--gray-50) 100%); }`]
})
export class HowItWorksComponent {}
