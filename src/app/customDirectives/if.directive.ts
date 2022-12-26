import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template:TemplateRef<any>,private viewContaier:ViewContainerRef) { 

  }
  @Input('appIf') set displayView(condetion:boolean){
    if(condetion){
      this.viewContaier.createEmbeddedView(this.template)
    }else{
      this.viewContaier.clear()
    }
  }

}
