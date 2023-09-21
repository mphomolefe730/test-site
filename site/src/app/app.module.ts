import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './components/testimonial/testimonial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';
========
import { FooterComponent } from './footer/footer.component';
=======
import { NavComponent } from './components/navBar/nav-bar.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { PackageModalComponent } from './components/package-modal/package-modal.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    NavMobileComponent,
    NavComponent,
    ActivitiesComponent,
    PackageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }