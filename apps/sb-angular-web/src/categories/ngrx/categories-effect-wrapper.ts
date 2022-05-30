import { Injectable } from '@angular/core';
import {
  loadCategoriesEpic,
  createEffect
} from '@betsson-sportsbook-monorepo/data-access-categories';
import { Actions, ofType } from '@ngrx/effects';

@Injectable()
export class CategoriesEffects {
  loadCategories$ = createEffect(this.actions$, loadCategoriesEpic)
  constructor(private actions$: Actions) {}
}
