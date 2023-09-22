import { Component } from "@angular/core";

@Component({
    // [ngClass]="{'bg-transparent': !navbarSolid, 'bg-gray-700': navbarSolid}"
    selector: 'app-gallery',
    template: `
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="image-div" [ngClass]="{'third': i == 2}" *ngFor="let item of images; let i = index" >
            <img
            alt="gallery"
            class="rounded-lg object-cover object-center"
            [src]="item.image" />
            <div class="image-info flex px-4 justify-between">
                <p>{{item.country}}</p>
                <p>{{item.price}}</p>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./gallery.component.css']
  })

export class GalleryComponent {
    images = [
        {country: "Spain", price: "$800", image: "../../assets/images/about-page images/carousel/Rectangle 19355.png"},
        {country: "Brazil", price: "$400", image: "../../assets/images/about-page images/carousel/Rectangle 19356.png"},
        {country: "Ireland", price: "$1200", image: "../../assets/images/about-page images/carousel/Rectangle 19357.png"},
        {country: "England", price: "$600", image: "../../assets/images/about-page images/carousel/Rectangle 19358.png"},
        {country: "Greece", price: "$850", image: "../../assets/images/about-page images/carousel/Rectangle 19359.png"},
        {country: "Iceland", price: "$921", image: "../../assets/images/about-page images/carousel/Rectangle 19360.png"},
        {country: "Argentina", price: "$550", image: "../../assets/images/about-page images/carousel/Rectangle 19361.png"},
        {country: "New Zealand", price: "$200", image: "../../assets/images/about-page images/carousel/Rectangle 19362.png"},
        {country: "USA", price: "$491", image: "../../assets/images/about-page images/carousel/Rectangle 19363.png"},
        {country: "Portugal", price: "$1910", image: "../../assets/images/about-page images/carousel/Rectangle 19364.png"},
        {country: "Russia", price: "$926", image: "../../assets/images/about-page images/carousel/Rectangle 19365.png"}
    ]
}