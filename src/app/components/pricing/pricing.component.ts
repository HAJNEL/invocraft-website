import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  template: `<section class="pricing" id="pricing"><div class="container"><div class="section-header"><span class="section-badge">Pricing</span><h2 class="section-title">Simple, Transparent<br><span class="gradient-text">Pricing Plans</span></h2><p class="section-subtitle">Choose the perfect plan for your business.</p></div></div></section>`,
  styles: [`.pricing { padding: 6rem 0; background-color: var(--white); }`]
})
export class PricingComponent {}
