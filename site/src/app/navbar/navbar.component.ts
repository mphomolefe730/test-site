import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logo="../../assets/HARVEST_HUB_LOGO.png"
  screenWidth = screen.width>550;
}
