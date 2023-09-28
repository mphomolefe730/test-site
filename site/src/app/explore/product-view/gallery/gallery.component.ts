import { Component } from '@angular/core';
import { productViewService } from '../productViewService';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  data:any;
  constructor(private sharedService: productViewService) { }

  ngOnInit() {
    this.sharedService.currentData.subscribe(data => {
      this.data = data
    });    
  }
}
