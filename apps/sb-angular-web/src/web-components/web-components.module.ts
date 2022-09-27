import { GifyItemWrapperComponent } from './gify-item-wrapper';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [GifyItemWrapperComponent],
  exports: [GifyItemWrapperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebComponentsModule {}
