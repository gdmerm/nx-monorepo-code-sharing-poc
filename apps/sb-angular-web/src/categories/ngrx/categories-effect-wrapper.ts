import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { loadCategoriesEpic } from '@betsson-sportsbook-monorepo/data-access-categories';

@Injectable()
export class CategoriesEffects {
  loadCategories$ = createEffect(loadCategoriesEpic)
  constructor(private actions$: Actions) {}
}
