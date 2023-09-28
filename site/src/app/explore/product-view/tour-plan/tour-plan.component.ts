import { Component } from '@angular/core';
import { productViewService } from '../productViewService';

@Component({
  selector: 'app-tour-plan',
  templateUrl: './tour-plan.component.html',
  styleUrls: ['./tour-plan.component.css']
})
export class TourPlanComponent {
  data:any;
  constructor(private sharedService: productViewService) { }

  ngOnInit() {
    this.sharedService.currentData.subscribe(data => {
      this.data = data      
    });    
  }
}
