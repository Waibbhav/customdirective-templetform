// elemtnt ref is a symple class that raps native dom elements in the browser and grants direct axis to the host
// dom by providing the native element method which expose all the methods and properties to manipulate dom 

import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private eleref:ElementRef) {
        this.eleref.nativeElement.style.fontSize="30px"
        this.eleref.nativeElement.style.color="red"
      console.log(this.eleref.nativeElement);
      
   }
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red');
  }

  @HostListener('click') click() {
    alert('clicked')
  }

  @HostListener('click') onclick() {
   this.disable('true')
  }
 
  private highlight(color: string) {
    this.eleref.nativeElement.style.color = color;
  }

  private disable(str: string) {
    this.eleref.nativeElement.disabled = str;
  }
}
