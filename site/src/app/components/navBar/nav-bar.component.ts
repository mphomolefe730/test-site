import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavComponent {
  menuOpen = false;
  dropdown = false;
  public screenWidth: any = window.innerWidth;
  navbarSolid = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.navbarSolid = window.scrollY;
  }


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