import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { BookThisTourComponent } from './book-this-tour/book-this-tour.component';
import { HeaderComponent } from './header/header.component';
import { ImgsComponent } from './imgs/imgs.component';
import { TripComponent } from './trip/trip.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    BookThisTourComponent,
    HeaderComponent,
    ImgsComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
