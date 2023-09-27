import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GetHotelsFlightsService } from '../../services/get-hotels-flights.service'

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  constructor(private route:Router){
  }
  //---------------------array values--------------
  filterLocation=[
    'Bangkok', 'Paris', 'London', 'Singapore', 'New York City', 'Istanbul', 
    'Seoul', 'Osaka', 'africa'
  ]
  filterGeoId=[
    293916, 187147, 186338, 294265, 60763, 93974, 
    294197, 1023540, 297395,
  ]
  location:any[] = [];
  catergories:any[]=[
    {name: 'Adults', details: 'Ages 13 or above', quantity:1, status:false},
    {name: 'Children', details: 'Ages 2 - 12', quantity:0, status:false},
    {name: 'Rooms', details: 'how many rooms would you like', quantity:1,status:true},
    {name: 'Currency', details: 'what currency would you like', quantity:'USD', status:true},
    {name: 'Min-Price', details: 'filter minimum price', quantity:1000, status:true},
    {name: 'Max-Price', details: 'filter maximum price', quantity:10000,status:true},
    ];
  //function to increase the quantity of filter options
  addFunction(index:number):void{
    this.catergories[index].quantity +=1;
    this.catergories[index].status=true;
  };
  minusFunction(index:number):void{
    this.catergories[index].quantity -=1;
    if (this.catergories[index].quantity == 0) this.catergories[index].status=false;
  };

  //---------------------default values--------------
  menu = false;
  geoId:number=297395;
  adults:number=this.catergories[0].quantity;
  children:number=this.catergories[1].quantity;
  rooms:number=this.catergories[2].quantity;
  currency:string=this.catergories[3].quantity;
  minPrice:number=this.catergories[4].quantity;
  maxPrice:number=this.catergories[5].quantity;

  currentDate= new Date();
  checkIn = `${this.currentDate.getFullYear()}-0${this.currentDate.getMonth()}-${this.currentDate.getDate()}`;
  checkOut = `${this.currentDate.getFullYear()}-0${this.currentDate.getMonth()}-${this.currentDate.getDate()+3}`;

  //------------------------functions-----------------
  async getHotel(j:number){
    this.location = [];
    console.log(`clicked number:${j} id: ${this.filterGeoId[j]}`)
    this.geoId=this.filterGeoId[j];
    let displayHotels = new GetHotelsFlightsService();
    let results = await displayHotels.getHotel(this.geoId,this.checkIn,this.checkOut,this.adults,this.rooms,this.children,this.currency,this.minPrice,this.maxPrice);
    // console.log(results.data.data)
    this.location.push(results.data.data);
    console.log(this.location);
    // console.log(this.location[0].data.data[0].title);
  }
  ngOnInit(){
    this.getHotel(1);
  }
  navigateToProduct(){
    this.route.navigate(['./explore/page/information'],{ queryParams:{geoId: this.geoId,checkIn :this.checkIn,checkOut: this.checkOut} });
  }

  // changeCity(place:string){
  //   console.log(this.perferedLocation);
  //   this.perferedLocation=place;
  //   console.log(this.perferedLocation);
  //   console.log(`place = ${place}`)
  // }

  showMenu(){
    this.menu=!this.menu;
  }
  async applyFilter(){
    this.menu=!this.menu;
    this.location = [];
    let displayHotels = new GetHotelsFlightsService();
    let results = await displayHotels.getHotel(this.geoId,this.checkIn,this.checkOut,this.adults,this.rooms,this.children,this.currency,this.minPrice,this.maxPrice);
    // console.log(results.data.data)
    this.location.push(results.data.data);
  }
}
