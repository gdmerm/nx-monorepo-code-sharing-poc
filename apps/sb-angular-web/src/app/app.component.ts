import { Component } from '@angular/core';

@Component({
  selector: 'betsson-sportsbook-monorepo-root',
  template: `
<!--    <app-categories-listing></app-categories-listing>-->
    <app-giphy-search></app-giphy-search>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sb-angular-web';
}
