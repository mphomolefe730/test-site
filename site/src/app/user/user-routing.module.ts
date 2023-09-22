import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component'
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent, children:[
    {path:'history', component: HistoryComponent},
    {path:'wallet', component: WalletComponent},
    // {path:'privacy', component: PrivacyComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
