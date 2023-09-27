import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  constructor(private route:Router){
  }
  
  navigateToExplore(){
    this.route.navigate(['./explore']);
  }
}