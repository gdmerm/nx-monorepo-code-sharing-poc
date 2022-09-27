import { GiphySearchComponent } from './components/giphy-search.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import {giphies, name as giphiesFeatureKey} from "@betsson-sportsbook-monorepo/data-access-giphy"
import { GiphyEffects } from './ngrx/giphy-search-effect-wrapper';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    GiphySearchComponent
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
    GiphySearchComponent
  ],
})
export class GiphySearchModule { }
