import { Component } from '@angular/core';
import { productViewService } from '../productViewService';
import { Router } from '@angular/router';
import { exploreToLandscapeService } from 'src/app/services/exploreToLandscapeService';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  data:any = null;
  hotelBasicInfo:any;
  amenitiesContent:any;
  price:any;

  constructor(private sharedService: productViewService, private route:Router, private exploreToLandscapeService: exploreToLandscapeService) { }

 async ngOnInit() {
    this.sharedService.currentData.subscribe(data => {   
      this.data = data;
      if(data) {
        this.amenitiesContent = data.about.content.find((i:any) => i.title === 'Amenities')?.content || [];
      }
    });  

    this.exploreToLandscapeService.currentData.subscribe(data => {   
      this.hotelBasicInfo = data;
    });  
    
    // -------------------------------------------------------------------------------------------------------------

    var gallery = document.querySelector('#gallery');
    var getVal = function (elem:any, style:any) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
    var getHeight = function (item:any) { return item.querySelector('.content').getBoundingClientRect().height; };
    var resizeAll = function () {
        var altura = getVal(gallery, 'grid-auto-rows');
        var gap = getVal(gallery, 'grid-row-gap');
        gallery?.querySelectorAll('.gallery-item').forEach(function (item) {
            var el = item;
            (el as HTMLElement).style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
        });
    };
    gallery?.querySelectorAll('img').forEach(function (item) {
        item.classList.add('byebye');
        if (item.complete) {
            console.log(item.src);
        }
        else {
            item.addEventListener('load', function () {
                var altura = getVal(gallery, 'grid-auto-rows');
                var gap = getVal(gallery, 'grid-row-gap');
                var gitem = item.parentElement?.parentElement as HTMLElement;
                gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
                item.classList.remove('byebye');
            });
        }
    });
    window.addEventListener('resize', resizeAll);
    gallery?.querySelectorAll('.gallery-item').forEach(function (item) {
        item.addEventListener('click', function () {        
            item.classList.toggle('full');        
        });
    });

  }

  takeToGallery() {
    this.route.navigate(['/explore/page/gallery']);
  }
}
