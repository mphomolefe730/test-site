import { OnInit, OnDestroy, Directive } from '@angular/core';
import { NavBarService } from './nav-bar.service';

@Directive()
export abstract class BaseComponent implements OnInit, OnDestroy {
  constructor(protected navbarService: NavBarService) { }

  ngOnInit() {
    this.navbarService.showNav.next(false);
  }

  ngOnDestroy() {
    this.navbarService.showNav.next(true);
  }
}
