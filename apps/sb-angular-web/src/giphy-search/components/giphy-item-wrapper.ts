import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'giphy-item-wrapper',
  template: `
    <gify-item [imageurl]="imageUrl" [width]="width" [height]="height" #customEl></gify-item>
  `
})
export class GiphyItemWrapperComponent implements AfterViewInit {
  @ViewChild('customEl') customElement: ElementRef | undefined;
  @Input() imageUrl: string = ''
  @Input() width: string = '100px'
  @Input() height: string = '100px'

  ngAfterViewInit() {
    this.customElement && this.customElement.nativeElement.setAttribute('imageurl', this.imageUrl)
  }
}
