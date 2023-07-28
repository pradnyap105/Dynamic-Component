import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ComponentYComponent } from '../component-y/component-y.component';

@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.css']
})
export class ComponentXComponent {
savePanelName() {
throw new Error('Method not implemented.');
}
saveData($event: Event) {
throw new Error('Method not implemented.');
}
addComponentX() {
throw new Error('Method not implemented.');
}
  componentYList: any[] = [];

  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {}

  addComponentY() {
    const componentFactory = this.resolver.resolveComponentFactory(ComponentYComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentYList.push(componentRef.instance);
  }
}
