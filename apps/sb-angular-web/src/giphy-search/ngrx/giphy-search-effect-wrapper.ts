import { Injectable } from '@angular/core';
import { createPureEffect } from '../../main/createPureEffect';
import { searchGiphyEffect } from '@betsson-sportsbook-monorepo/data-access-giphy';
import { Actions } from '@ngrx/effects';

@Injectable()
export class GiphyEffects {
  loadGiphyEffects$ = createPureEffect(this.actions$, searchGiphyEffect)
  constructor(private actions$: Actions) {}
}
