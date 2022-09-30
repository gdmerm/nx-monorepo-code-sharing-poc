import { Injectable } from '@angular/core';
import { createPureEffect } from '../../main/createPureEffect';
import { searchGiphyEffect } from '@betsson-sportsbook-monorepo/data-access-giphy';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';

@Injectable()
export class GiphyEffects {
  loadGiphyEffects$ = createPureEffect(
    searchGiphyEffect,
    [this.actions$, this.router]
  )
  constructor(private actions$: Actions, private router: Router) {}
}
