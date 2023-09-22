import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  location=[
    {name: 'Switzerland', description:'Qui Tempare Voluptate Qui QuiaCommodi Rem Praesentium Alias Et.',
    price:1100,rating:5,img:'/assets/images/thumbnails(1)/Rectangle 19377.png'},
    {name: 'Berlin', description:'Qui Tempare Voluptate Qui QuiaCommodi Rem Praesentium Alias Et.',
    price:1230,rating:4.9,img:'/assets/images/thumbnails(1)/Rectangle 19377 (1).png'},
    {name: 'Maldieves', description:'Qui Tempare Voluptate Qui QuiaCommodi Rem Praesentium Alias Et.',
    price:3000,rating:5,img:'/assets/images/thumbnails(1)/Rectangle 19377 (2).png'},
    {name: 'Toronto', description:'Qui Tempare Voluptate Qui QuiaCommodi Rem Praesentium Alias Et.',
    price:2000,rating:4.6,img:'/assets/images/thumbnails(1)/Rectangle 19377 (3).png'},
    {name: 'Baku', description:'Qui Tempare Voluptate Qui QuiaCommodi Rem Praesentium Alias Et.',
    price:1440,rating:5,img:'/assets/images/thumbnails(1)/Rectangle 19377 (4).png'},
    {name: 'China', description:'Qui Tempare Voluptate Qui QuiaCommodi Rem Praesentium Alias Et.',
    price:1210,rating:4,img:'/assets/images/thumbnails(1)/Rectangle 19377 (5).png'},
  ]
}
