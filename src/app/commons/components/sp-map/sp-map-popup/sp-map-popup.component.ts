import { Component, Input } from '@angular/core';

@Component({
  selector: 'sp-map-popup',
  template: '<ng-content></ng-content>'
})
export class SpMapPopupComponent {

  @Input() content: string;
}