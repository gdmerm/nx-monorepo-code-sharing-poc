import { createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

type AngularEffect = (actions$: Observable<Action>) => Observable<Action>;

export default (actions$: Observable<Action>, fn: AngularEffect) => {
  return createEffect(() => {
    return fn(actions$)
  })
}
