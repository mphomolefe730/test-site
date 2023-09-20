import { Component, HostListener, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavComponent implements AfterViewInit {
  menuOpen = false;
  dropdown = false;
  public screenWidth: any = window.innerWidth;
  navbarSolid = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  ngAfterViewInit() {
    const bodies = this.el.nativeElement.ownerDocument.querySelectorAll('body');
    const lastBody = bodies[bodies.length - 1];

    this.renderer.listen(lastBody, 'scroll', (event) => {
      this.navbarSolid = event.target.scrollTop;
      
    });
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