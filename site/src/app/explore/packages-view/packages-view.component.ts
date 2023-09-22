import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages-view',
  templateUrl: './packages-view.component.html',
  styleUrls: ['./packages-view.component.css']
})
export class PackagesViewComponent {
  router: string;
  constructor(private _router: Router){
    this.router = _router.url; 
  }
}
