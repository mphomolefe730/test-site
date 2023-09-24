import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductViewRoutingModule } from './product-view-routing.module';
import { ContainerComponent } from './container/container.component';
import { InformationComponent } from './information/information.component';
import { TourPlanComponent } from './tour-plan/tour-plan.component';
import { LocationComponent } from './location/location.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmptyComponent } from './empty/empty.component';


@NgModule({
  declarations: [
    ContainerComponent,
    InformationComponent,
    TourPlanComponent,
    LocationComponent,
    GalleryComponent,
    EmptyComponent
  ],
  imports: [
    CommonModule,
    ProductViewRoutingModule
  ]
})
export class ProductViewModule { }
