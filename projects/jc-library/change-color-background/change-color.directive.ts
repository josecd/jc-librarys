import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/**
 * Description placeholder
 * @date 10/30/2023 - 11:07:18 AM
 * Transforma un elemento de html con su background de color azul
 * @export
 * @class ChangeColorDirective
 * @typedef {ChangeColorDirective}
 */
@Directive({
  selector: '[libChangeColor]',
  standalone:true
})
export class ChangeColorDirective {
  private readonly el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color = 'red'): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
