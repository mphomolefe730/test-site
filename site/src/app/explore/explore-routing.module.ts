import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesViewComponent } from './packages-view/packages-view.component';

const routes: Routes = [
  {path:'', component: PackagesViewComponent, children:[
    
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
