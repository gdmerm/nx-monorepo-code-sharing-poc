import { Component } from '@angular/core';

@Component({
  selector: 'betsson-sportsbook-monorepo-root',
  template: `
    <h1>Hello Angular POC</h1>
    <app-categories-listing></app-categories-listing>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sb-angular-web';
}
