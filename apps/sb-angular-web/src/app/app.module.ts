import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CategoriesModule } from '../categories/categories.module';
import { RouterModule } from '@angular/router';
import { GiphySearchModule } from '../giphy-search/giphy-search.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CategoriesModule,
    GiphySearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
