import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import { fetchCategoriesStart } from '@betsson-sportsbook-monorepo/data-access-categories';

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
export class CategoriesListingComponent implements OnInit, OnChanges {
  categories$: Observable<Array<{label: string, slug: string}>>;
  private subscriptions: Subscription[] = []
  constructor(
    private store: Store,
  ) {
    this.categories$ = this.store.select((state: any) => state?.categories)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('<app-categories-listing>: onChanges()')
  }

  ngOnInit(): void {
    console.log('<app-categories-listing>: onInit()')
    this.subscriptions.push(this.categories$.subscribe(categs => {
      if (categs.length === 0) {
        this.store.dispatch(fetchCategoriesStart())
      }
    }))
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
