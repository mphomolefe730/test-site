import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent {
  inputField = false;
  catergories=[
    {name: 'Adults', details: 'Ages 13 or above', quantity:0, status:false},
    {name: 'Children', details: 'Ages 2 - 12', quantity:0, status:false},
    {name: 'Infants', details: 'Under 2', quantity:0,status:false},
    ];
  //if the input box is focused, the filter options will show up
  filterShow(){
    this.inputField = !this.inputField;
  }
  //function to increase the quantity of filter options
  addFunction(index:number):void{
    this.catergories[index].quantity +=1;
    this.catergories[index].status=true;
  };
  minusFunction(index:number):void{
    this.catergories[index].quantity -=1;
    if (this.catergories[index].quantity == 0) this.catergories[index].status=false;
  };
}
