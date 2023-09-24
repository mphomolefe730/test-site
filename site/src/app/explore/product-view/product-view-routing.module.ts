import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { InformationComponent } from './information/information.component';
import { TourPlanComponent } from './tour-plan/tour-plan.component';
import { LocationComponent } from './location/location.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  {path:'', component: ContainerComponent, children:[
    // {path:'',redirectTo:'information',pathMatch:'full'},
    {path:'',component: EmptyComponent},
    {path:'information',component: InformationComponent},
    {path:'tour-plan',component: TourPlanComponent},
    {path:'location',component: LocationComponent},
    {path:'gallery',component: GalleryComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductViewRoutingModule { }
