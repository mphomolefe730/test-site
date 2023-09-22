import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  loader=true;
  logo='../favicon.ico';

  ngAfterViewInit() {
    // this.loader = false;
  }
  ngOnInit():void{
    setTimeout(() => {
      this.loader = false
    }, 7000);

  }
}