import {Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { fetchCategoriesStart, selectCategories } from '@betsson-sportsbook-monorepo/data-access-categories';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-categories-listing',
  template: `
    <section class="categories-container">
      <ul>
        <li *ngFor="let categ of categories$ | async; index as i;">
          <a [routerLink]="['/', categ.slug]">{{ categ.label }}</a>
        </li>
      </ul>
    </section>
  `,
  styleUrls: ['./categories-listing.component.css']
})
export class CategoriesListingComponent implements OnInit {
  categories$: Observable<Array<{label: string, slug: string}>>;
  constructor(
    private store: Store,
  ) {
    this.categories$ = this.store.select(selectCategories)
  }

  ngOnInit(): void {
    this.store.dispatch(fetchCategoriesStart())
  }
}
