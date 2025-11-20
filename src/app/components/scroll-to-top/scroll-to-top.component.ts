import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  template: `<button class="scroll-to-top" [class.visible]="isVisible" (click)="scrollToTop()" aria-label="Scroll to top"><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></button>`,
  styles: [`.scroll-to-top { position: fixed; bottom: 30px; right: 30px; width: 50px; height: 50px; background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); color: var(--white); border: none; border-radius: 50%; box-shadow: var(--shadow-xl); cursor: pointer; opacity: 0; visibility: hidden; transform: translateY(20px); transition: all var(--transition-base); z-index: 999; display: flex; align-items: center; justify-content: center; } .scroll-to-top.visible { opacity: 1; visibility: visible; transform: translateY(0); } .scroll-to-top:hover { transform: translateY(-5px); box-shadow: var(--shadow-2xl); } .scroll-to-top svg { width: 24px; height: 24px; }`]
})
export class ScrollToTopComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.pageYOffset > 500;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
