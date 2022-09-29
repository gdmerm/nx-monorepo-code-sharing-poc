import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GiphyItem, searchGiphiesStart, selectGiphies } from '@betsson-sportsbook-monorepo/data-access-giphy';
import { Observable } from 'rxjs';
import '../../../../../libs/sb-ui-components/src/lib/custom-GifyItem.js';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-giphy-search',
  template: `
    <input type="text" (keyup)="handleInput($event)" />
    <section *ngIf="!isEmpty" class="giphy-container">
      <giphy-item-wrapper
        *ngFor="let giphy of giphies$ | async; index as i;"
        [imageUrl]="giphy.images.fixed_height_small.url">
      </giphy-item-wrapper>
    </section>
  `
})
export class GiphySearchComponent {
  giphies$: Observable<Array<GiphyItem>>
  isEmpty = true;
  constructor(private store: Store) {
    this.giphies$ = store.select(selectGiphies)
  }

  handleInput(e: Event) {
    if ((e.target as HTMLInputElement).value.length === 0) {
      this.isEmpty = true
    } else {
      this.isEmpty = false
      this.store.dispatch(searchGiphiesStart((e.target as HTMLInputElement).value))
    }
  }
}
