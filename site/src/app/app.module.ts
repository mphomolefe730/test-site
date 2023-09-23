import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBottomComponent } from './core/nav-bottom/nav-bottom.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { PackageModalComponent } from './components/package-modal/package-modal.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TourPackageCardComponent } from './components/tour-package-card/tour-package-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestimonialComponent,
    NavBottomComponent,
    NavBarComponent,
    FooterComponent,
    ActivitiesComponent,
    PackageModalComponent,
   
    AboutComponent,
    GalleryComponent,
    TourPackageCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }