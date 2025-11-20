import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  template: `<section class="faq" id="faq"><div class="container"><div class="section-header"><span class="section-badge">FAQ</span><h2 class="section-title">Frequently Asked<br><span class="gradient-text">Questions</span></h2></div></div></section>`,
  styles: [`.faq { padding: 6rem 0; background-color: var(--white); }`]
})
export class FaqComponent {}
