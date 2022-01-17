import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // 
  @HostListener(`mouseenter`) onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight || this.defaultColor;
  }

   //
   @Input() appHighlight!: string;

   //
   @Input() defaultColor!: string;
 
  //  
  @HostListener (`mouseleave`) onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = ``;

  }

  constructor(private el: ElementRef) { }

}
