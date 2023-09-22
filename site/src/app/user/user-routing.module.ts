import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component'
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent, children:[
    {path:'history', component: HistoryComponent},
    {path:'wallet', component: HistoryComponent},
    {path:'privacy', component: HistoryComponent},
    {path:'logout', component: HistoryComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
