import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-package-card',
  template: `
    <div class="packages-section justify-center flex flex-col items-center px-4 sm:px-16 mb-28">
    <p style="color: #DF6951;" class="font-semibold mb-2">TRENDY</p>
    <h1 class="text-4xl mb-4 font-bold text-center" style="color: rgba(24, 30, 75, 1);">Our Trending Tour Packages</h1>
    <div class="packages">
        <div class="package max-w-xs" *ngFor="let item of packages; let i = index">
            <div class="mb-10 relative">
                <img [src]="item.image" alt="" class="h-full w-full">
                <img [src]="item.countryImage" alt="" class="absolute -bottom-20">
            </div>
            <div class="flex items-center gap-5 mb-3">
                <div class="days flex gap-1 items-center">
                    <span class="material-symbols-outlined" style="color: rgb(125, 124, 124); font-size: 30px;">
                        calendar_today
                    </span>
                    <p>{{item.duration}}</p>
                </div>
                <div class="people_going flex items-center gap-1">
                    <span class="material-symbols-outlined" style="color: rgb(125, 124, 124); font-size: 30px;">
                        person
                    </span>
                    <p>{{item.peopleGoing}}</p>
                </div>
            </div>
            <div class="flex justify-between items-center pr-5 mb-2">
                <h1 class="text-2xl font-bold" style="color: rgba(24, 30, 75, 1); font-size: 30px;">{{item.location}}</h1>
                <div class="rating flex items-center space-x-1">
                    <svg *ngFor="let r of getTimes(item.rating); let j = index" class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <!-- <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg> -->
                    <svg *ngFor="let o of getTimes(5 - item.rating); let j = index"  class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <!-- <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="url(#half-gradient)" viewBox="0 0 22 20">
                        <defs>
                            <linearGradient id="half-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="50%" stop-color="#FDE047" /> 
                                <stop offset="50%" stop-color="#6B7280" /> 
                            </linearGradient>
                        </defs>
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg> -->
                </div>
            </div>
            <div class="flex gap-1 items-center mb-2">
                <span class="material-symbols-outlined" style="color: rgb(125, 124, 124)">
                    location_on
                </span>
                <p>{{item.countryName}}</p>
            </div>
            <div class="price">
                <h1 class="text-2xl mb-4 font-bold tracking-wider" style="color: #DF6951;">$1,223</h1>
            </div>
            <p>{{item.text}}</p>
            <button class="btn1 mt-3">Explore Now</button>
        </div>
    </div>
</div>
  `,
  styleUrls: ['./tour-package-card.component.css']
})
export class TourPackageCardComponent {
  packages = [
    {
      image: "../../../assets/images/homepage images/packages countries/Rectangle 19305-1.png",
      countryImage: "../../../assets/images/homepage images/flags/brazil.png",
      duration: "8 Days",
      peopleGoing: "30 People Going",
      location: "Amazon",
      rating: 4,
      countryName: "Brazil",
      price: "$1,223",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam non, nulla molestias, neque quae temporibus hic architecto placeat iste rem labore cupiditate.",
      link: ""
    },
    {
      image: "../../../assets/images/homepage images/packages countries/Rectangle 19305-2.png",
      countryImage: "../../../assets/images/homepage images/flags/Ellipse 623-2.png",
      duration: "8 Days",
      peopleGoing: "155 People Going",
      location: "Giza",
      rating: 5,
      countryName: "Egypt",
      price: "$1,200",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam non, nulla molestias, neque quae temporibus hic architecto placeat iste rem labore cupiditate.",
    },
    {
      image: "../../../assets/images/homepage images/packages countries/Rectangle 19305.png",
      countryImage: "../../../assets/images/homepage images/flags/Ellipse 623.png",
      duration: "8 Days",
      peopleGoing: "25 People Going",
      location: "Switzerland",
      rating: 3,
      countryName: "Europe",
      price: "$1,320",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam non, nulla molestias, neque quae temporibus hic architecto placeat iste rem labore cupiditate.",
    }
  ];

  getTimes(rating: number) {
    return new Array(rating);
  }

}
