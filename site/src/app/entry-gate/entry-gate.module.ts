import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryGateRoutingModule } from './entry-gate-routing.module';
import { ShellComponent } from './shell/shell.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    ShellComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    EntryGateRoutingModule
  ]
})

export class EntryGateModule {}