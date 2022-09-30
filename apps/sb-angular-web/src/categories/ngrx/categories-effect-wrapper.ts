import { Injectable } from '@angular/core';
import {
  loadCategoriesEpic,
} from '@betsson-sportsbook-monorepo/data-access-categories';
import { Actions } from '@ngrx/effects';
import { createPureEffect } from '../../main/createPureEffect';

@Injectable()
export class CategoriesEffects {
  loadCategories$ = createPureEffect(loadCategoriesEpic, [this.actions$])
  constructor(private actions$: Actions) {}
}
