import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

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


}
