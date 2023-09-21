import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showModal = false;

  // scrollToTop() {
  //   const doc = document.querySelectorAll("body");
  //   doc[doc.length - 1].scrollTo({top: 0, behavior: "smooth"});
  // }
  

  openModal = (): void => {
    this.showModal = true;
  }

  closeModal = (): void => {
    this.showModal = false;
  }

}
