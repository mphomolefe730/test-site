import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  cardInformation=[
    {number:'1234123478659', date:'25/30', cvv:'234'},
  ]
  addCard(number:string,date:string,cvv:string){
    this.cardInformation.push({number,date,cvv});
    alert('Card Added')
  }

  activities=[]

}
