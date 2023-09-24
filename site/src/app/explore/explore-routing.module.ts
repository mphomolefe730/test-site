import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesViewComponent } from './packages-view/packages-view.component';
import { PackagesComponent } from './packages/packages.component';

const routes: Routes = [
  {path:'', component:PackagesViewComponent, children:[
    // {path:'',redirectTo:'explore',pathMatch:"full"},
    // {path:'explore',component:PackagesComponent},
    {path:'',component:PackagesComponent},
    {path: 'page',loadChildren:()=>import('./product-view/product-view.module').then((m)=>m.ProductViewModule)}    
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
