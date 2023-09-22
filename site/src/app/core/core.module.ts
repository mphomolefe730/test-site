import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NavBottomComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
