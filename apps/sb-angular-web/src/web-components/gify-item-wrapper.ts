import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'gify-item-wrapper',
  template: `<gify-item [url]="url" [width]="width" [height]="height"></gify-item>`,
})
export class GifyItemWrapperComponent {
  @Input() url = ''
  @Input() width = 0
  @Input() height = 0
}
