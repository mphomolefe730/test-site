import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { HistoryComponent } from './history/history.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WalletComponent } from './wallet/wallet.component';


@NgModule({
  declarations: [
    SettingsComponent,
    HistoryComponent,
    LandingPageComponent,
    WalletComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
