import {Directive, ElementRef, HostListener} from '@angular/core';

const ClickingBackColor = '#eee';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[appBtnClickStyle]'
})
export class BtnClickDirective {
    private el: HTMLElement;
    private timer: NodeJS.Timeout | undefined = undefined;
    private animating = false;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
        this.el.style.transition = 'background-color .2s ease-out';
    }

    @HostListener('click')
    doClick() {
        // tslint:disable-next-line:curly
        if (this.animating) {
            return;
        }
        this.animating = true;
        this.el.prevBackColor = this.el.style.backgroundColor;
        this.el.style.backgroundColor = ClickingBackColor;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.el.style.backgroundColor = this.el.prevBackColor || '';
            this.animating = false;
        }, 200);
    }
}

interface HTMLElement {
    prevBackColor: string;
    style: CSSStyleDeclaration;
}
