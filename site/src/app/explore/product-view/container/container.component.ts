import { Component } from '@angular/core';
import { productViewService } from '../productViewService';
import { exploreToLandscapeService } from 'src/app/services/exploreToLandscapeService';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  data:any;
  constructor(private sharedService: productViewService, private exploreToLandscapeService: exploreToLandscapeService) { }

  ngOnInit() {    
    this.exploreToLandscapeService.currentData.subscribe(async data => {   
      this.data = data;
      const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelDetails?id=${data.hotelId}&checkIn=${data.checkIn}&checkOut=${data.checkOut}&currency=USD`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '819d8d668emsh6fafc0718b1489ep1ffa0cjsna064a04018c4',
          'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        this.sharedService.updateData(result.data)
      } catch (error) {
        console.error(error);
      }
    });
    
  }

  // async ngOnInit() {
  //   const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=293916&checkIn=2023-09-28&checkOut=2023-09-30&pageNumber=1&currencyCode=USD';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'da468d75cdmsha95dbea2c45a671p18190djsn4f7e6d74ed26',
  //       'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}