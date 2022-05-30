import {NgModule} from "@angular/core";
import { CategoriesListingComponent } from './components/categories-listing/categories-listing.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { createFeatureSelector, StoreModule } from '@ngrx/store';
import {categories, name as categoriesFeatureKey, loadCategoriesEpic} from "@betsson-sportsbook-monorepo/data-access-categories";
import {EffectsModule} from "@ngrx/effects";
import { CategoriesEffects } from './ngrx/categories-effect-wrapper';

const selectFeature = createFeatureSelector<ReturnType<typeof categories>>(categoriesFeatureKey)

@NgModule({
  declarations: [
    CategoriesListingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(categoriesFeatureKey, categories),
    EffectsModule.forFeature([CategoriesEffects]),
  ],
  providers: [
  ],
  exports: [
    CategoriesListingComponent
  ]
})
export class CategoriesModule { }
