import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
//   templateUrl: './activities.component.html',
  template: `
    <div class="activities gap-3 w-full h-90%">
        <div class="flex gap-4" *ngFor="let item of activities; let i = index" >
            <input type="checkbox" name="" [id]="i">
            <label [for]="i">{{item}}</label>
        </div>
    </div>
  `,
  styleUrls: ['./activities.component.css'],
  
})
export class ActivitiesComponent {
    activities = ["Culture", "Outdoors", "Relaxing", "Wildlife", "Romantic", "Religious", "Hiking", "Musical", "Shopping", "Business"]
}
