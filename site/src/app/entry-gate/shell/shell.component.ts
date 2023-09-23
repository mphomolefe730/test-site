import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/nav-bar/base.component';
import { NavBarService } from 'src/app/core/nav-bar/nav-bar.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent extends BaseComponent {
  constructor(navbarService: NavBarService) { 
    super(navbarService);
  }
}
