import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  template: `
    <div class="testimonials w-full sm:p-16 p-5">
        <div class="testimonial bg-white relative rounded-xl h-auto w-full md:px-14 px-10 pt-20 pb-10">
            <img (click)="goToLeft()"  src="../../assets/images/homepage images/testimonials/left.png" class="left" alt="">
            <img (click)="goToRight()"  src="../../assets/images/homepage images/testimonials/right.png" class="right" alt="">
            <ng-container *ngFor="let item of items; let i = index">
                <div *ngIf="activeIndex === i" @fadeIn class="testi flex flex-col gap-4 items-center">
                    <img [src]='item.image' class="w-28 h-28 face" alt="">
                    <p class=" overflow-y-auto">{{item.text}}</p>
                    <p class="font-bold">{{item.name}}</p>
                    <img src="../../assets/images/homepage images/testimonials/quotes.png" class="object-none absolute top-2 left-2 w-32" alt="">
                </div>
            </ng-container>
        </div>
    </div>
  `,
  styleUrls: ['./testimonial.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})

export class CarouselComponent {
  activeIndex = 0;
  items = [
    {
        name: "Christine Becker",
        image: "../../assets/images/homepage images/testimonials/face2.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam excepturi vitae omnis corporis sit odit officia voluptatum doloremque qui. Harum fugiat quisquam facere ducimus, eum quia illum quas laboriosam ea id nobis aliquam repellendus! Totam repudiandae quis fugit asperiores atque!"
    }
    ,
    {
        name: "Martha Lin",
        image: "../../assets/images/homepage images/testimonials/face3.jpg",
        text:"Laboriosam excepturi vitae omnis corporis sit odit officia voluptatum doloremque qui. Harum fugiat quisquam facere ducimus, eum quia illum quas laboriosam ea id nobis aliquam repellendus! Totam repudiandae quis fugit asperiores atque!"
    }
  ];

  goToLeft() {
    this.activeIndex = this.activeIndex === 0 ? this.items.length - 1 : this.activeIndex - 1;
  }

  goToRight() {
    this.activeIndex = this.activeIndex === this.items.length - 1 ? 0 : this.activeIndex + 1;
  }
}
