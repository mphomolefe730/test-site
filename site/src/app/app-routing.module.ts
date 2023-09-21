import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackagesViewComponent} from './explore/packages-view/packages-view.component'

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'explore', loadChildren: ()=> import('./explore/explore.module').then((m)=>m.ExploreModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
