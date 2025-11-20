import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appCountUp]'
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input() appCountUp: number = 0;
  @Input() duration: number = 2000;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const options = {
      threshold: 0.5
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter();
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private animateCounter() {
    let current = 0;
    const target = this.appCountUp;
    const increment = target / (this.duration / 16);
    const isDecimal = target % 1 !== 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        this.el.nativeElement.textContent = isDecimal 
          ? current.toFixed(1) 
          : Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        this.el.nativeElement.textContent = isDecimal 
          ? target.toFixed(1) 
          : target.toLocaleString();
      }
    };

    updateCounter();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
