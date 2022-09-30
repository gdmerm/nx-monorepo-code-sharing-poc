import { createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

/**
 * Rewires angular injectables as arguments to the effect function `fn`. This is because some libraries expect actions$ as function argument and others (like angular)
 * expect it as a property on the instance (this.actions).
 * @param fn
 * @param injectables
 * @example createPureEffect((actions$, store) => actions$.pipe(...), [Actions, Store])
 */
export const createPureEffect = (fn: (...injected: any[]) => Observable<Action>, injectables: any[]) =>
  createEffect(() => fn(...injectables))




