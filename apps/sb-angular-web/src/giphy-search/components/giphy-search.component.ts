import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GiphyItem, searchGiphiesStart, selectGiphies } from '@betsson-sportsbook-monorepo/data-access-giphy';
import { Observable } from 'rxjs';
import '../../../../../libs/sb-ui-components/src/lib/custom-GifyItem.js';
import '../../../../../libs/sb-ui-components/src/lib/custom-HelloWorld.js';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-giphy-search',
  template: `
    <style>
      .giphy-container {
        display: flex;
        flex-wrap: wrap;
      }

      picture > img {
        width: 320px !important;
        height: 300px !important;
      }

      input[type="text"] {
        padding: 10px;
        margin: 10px 0;
        width: 100%;
      }
    </style>
    <input type="text" (keyup)="handleInput($event)" />
    <section class="giphy-container">
      <picture *ngFor="let giphy of giphies$ | async; index as i;">
        <img [src]="giphy.images.fixed_height_small.url" [width]="giphy.images.fixed_height_small.width" [height]="giphy.images.fixed_height_small.height"/>
      </picture>
    </section>
  `
})
export class GiphySearchComponent {
  giphies$: Observable<Array<GiphyItem>>
  name = 'Angular';
  constructor(private store: Store) {
    this.giphies$ = store.select(selectGiphies)
  }

  handleInput(e: Event) {
    this.store.dispatch(searchGiphiesStart((e.target as HTMLInputElement).value))
  }
}
