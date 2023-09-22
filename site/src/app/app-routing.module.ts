import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { PackagesViewComponent} from './explore/packages-view/packages-view.component'
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'explore', loadChildren: ()=> import('./explore/explore.module').then((m)=>m.ExploreModule)},
  {path:'user', loadChildren: ()=> import('./user/user.module').then((m)=>m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
