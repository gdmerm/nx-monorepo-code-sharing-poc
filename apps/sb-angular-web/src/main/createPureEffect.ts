import { createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

export const createPureEffect = <U extends any[]>(fn: (...injected: U) => Observable<Action>, injectables: U) =>
  createEffect(() => fn(...injectables))







