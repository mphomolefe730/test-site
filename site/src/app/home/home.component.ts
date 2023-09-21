import { Component } from '@angular/core';
// import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menuOpen = false;
  dropdown = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.dropdown = false;
  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }
}