import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GetHotelsFlightsService {

  async getHotel(geoId:number,checkIN:string,checkOut:string, adults:number,rooms:number,childrenAges:number,currencyCode:string,priceMin:number,priceMax:number){
    const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${geoId}&checkIn=${checkIN}&checkOut=${checkOut}&adults=${adults}&rooms=${rooms}&childrenAges%5B0%5D=${childrenAges}&currencyCode=${currencyCode}&priceMin=${priceMin}&priceMax=${priceMax}`;
    //console.log(url)
    // const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=293916&checkIn=2023-09-27&checkOut=2023-09-30&pageNumber=1&currencyCode=USD';
    
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1cbc91e128mshcceb52850a08018p12264fjsnefa0e12dbee2',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result)
      return result;

    } catch (error) {
      console.error(error);
    }
  }

  constructor() { }
}
