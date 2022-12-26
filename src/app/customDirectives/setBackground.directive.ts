import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
    selector:'[serBackgroundColor]'
})
export class setBackgroundDirective implements OnInit{
    constructor(private element:ElementRef){
        this.element = element
    }
    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = '#FFFF00'
    }
}