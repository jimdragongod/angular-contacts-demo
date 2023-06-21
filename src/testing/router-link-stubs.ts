import { Directive, Input, HostListener } from '@angular/core';

// mock RouterLink:
// import { RouterLink } from '@angular/router';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('routerLink') linkParams: string|null= null;
  navigatedTo:  string|null = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
