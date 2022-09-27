import { GiphySearchComponent } from './components/giphy-search.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {giphies, name as giphiesFeatureKey} from "@betsson-sportsbook-monorepo/data-access-giphy"
import { GiphyEffects } from './ngrx/giphy-search-effect-wrapper';
import { EffectsModule } from '@ngrx/effects';
import { GiphyItemWrapperComponent } from './components/giphy-item-wrapper';
import '../../../../libs/sb-ui-components/src/lib/custom-GifyItem.js';

@NgModule({
  declarations: [
    GiphySearchComponent,
    GiphyItemWrapperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(giphiesFeatureKey, giphies),
    EffectsModule.forFeature([GiphyEffects]),
  ],
  providers: [
  ],
  exports: [
    GiphySearchComponent,
    GiphyItemWrapperComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GiphySearchModule { }
