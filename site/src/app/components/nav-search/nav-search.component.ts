import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent {
  catergories=[
    {name: 'Adults', details: 'Ages 13 or above', quantity:'0'},
    {name: 'Children', details: 'Ages 2 - 12', quantity:'0'},
    {name: 'Infants', details: 'Under 2', quantity:'0'},
    ];

  addFunction(){
  };
}
