import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './components/testimonial/testimonial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBottomComponent } from './core/nav-bottom/nav-bottom.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { PackageModalComponent } from './components/package-modal/package-modal.component';
import { TravelWithUsComponent } from './travel-with-us/travel-with-us.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    NavBottomComponent,
    NavBarComponent,
    FooterComponent,
    ActivitiesComponent,
    PackageModalComponent,
    TravelWithUsComponent
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