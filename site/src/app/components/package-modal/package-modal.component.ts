import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'package-modal',
  templateUrl: './package-modal.component.html',
  styleUrls: ['./package-modal.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('250ms', style({ opacity: 0 })),
      ])
    ]),
  ],
})

export class PackageModalComponent {
  @Input() showModal: boolean = false;
  @Input() closeModal: Function = () => {};
  @Input() openModal: Function = () => {};;
  geoid:any;
  checkIn:any;
  checkOut:any;

  constructor(private router:Router) {}

  onSelectChange(event: any) {
    // console.log(`The selected option's value is: ${event.target.value}`);
    this.geoid = event.target.value;
  }

  checkInChange(event: any) {
    // console.log(`The selected option's value is: ${event.target.value}`);
    this.checkIn = event.target.value;
  }

  checkOutChange(event: any) {
    // console.log(`The selected option's value is: ${event.target.value}`);
    this.checkOut = event.target.value;
  }

  buildPackage() {
    this.router.navigate(["explore"],
    {
      state: {
        geoid: this.geoid,
        checkIn: this.checkIn,
        checkOut: this.checkOut
      }
    })
  }
}
