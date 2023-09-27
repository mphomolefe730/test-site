import { Component, HostListener } from '@angular/core';
import { BaseComponent } from 'src/app/core/nav-bar/base.component';
import { NavBarService } from 'src/app/core/nav-bar/nav-bar.service';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent extends BaseComponent {
  constructor(navbarService: NavBarService) { 
    super(navbarService);
  }
  //inputField = false;

}
