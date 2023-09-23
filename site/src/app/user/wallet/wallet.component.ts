import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  cardInformation=[
    {number:1234123478659, date:'25/30', cvv:234},
    {number:1238659412347, date:'02/22', cvv:904},
  ]
  activities=[]

}
