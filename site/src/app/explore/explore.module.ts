import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { NavSearchComponent } from '../components/nav-search/nav-search.component';
import { PackagesViewComponent } from './packages-view/packages-view.component';


@NgModule({
  declarations: [
    PackagesViewComponent,
    NavSearchComponent,
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
