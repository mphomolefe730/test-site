import { Component } from '@angular/core';
import { productViewService } from '../productViewService';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  data: any;
  url!: SafeResourceUrl;

  constructor(private sharedService: productViewService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sharedService.currentData.subscribe(data => {
      this.data = data;
      const unsafeUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCVYEXJ6qQ5rTgtL7WAAV3D2c1z8ZQQYws&q=${this.data.geoPoint.latitude},${this.data.geoPoint.longitude}`;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
    });    
  }
}

