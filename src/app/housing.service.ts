import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({ providedIn: 'root' })
export class HousingService {

  constructor() { }

  readonly BaseUrl = 'https://angular.io/assets/images/tutorials/faa';
  // housingLocationList: Housinglocation[] = [
  //   {
  //     id: 0,
  //     name: 'Acme Fresh Start Housing',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: `${this.BaseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
  //     availibleUnits: 4,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 1,
  //     name: 'A113 Transitional Housing',
  //     city: 'Santa Monica',
  //     state: 'CA',
  //     photo: `${this.BaseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
  //     availibleUnits: 0,
  //     wifi: false,
  //     laundry: true
  //   },
  //   {
  //     id: 2,
  //     name: 'Warm Beds Housing Support',
  //     city: 'Juneau',
  //     state: 'AK',
  //     photo: `${this.BaseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
  //     availibleUnits: 1,
  //     wifi: false,
  //     laundry: false
  //   },
  //   {
  //     id: 3,
  //     name: 'Homesteady Housing',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: `${this.BaseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
  //     availibleUnits: 1,
  //     wifi: true,
  //     laundry: false
  //   },
  //   {
  //     id: 4,
  //     name: 'Happy Homes Group',
  //     city: 'Gary',
  //     state: 'IN',
  //     photo: `${this.BaseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
  //     availibleUnits: 1,
  //     wifi: true,
  //     laundry: false
  //   },
  //   {
  //     id: 5,
  //     name: 'Hopeful Apartment Group',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: `${this.BaseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
  //     availibleUnits: 2,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 6,
  //     name: 'Seriously Safe Towns',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: `${this.BaseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
  //     availibleUnits: 5,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 7,
  //     name: 'Hopeful Housing Solutions',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: `${this.BaseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
  //     availibleUnits: 2,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 8,
  //     name: 'Seriously Safe Towns',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: `${this.BaseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
  //     availibleUnits: 10,
  //     wifi: false,
  //     laundry: false
  //   },
  //   {
  //     id: 9,
  //     name: 'Capital Safe Towns',
  //     city: 'Portland',
  //     state: 'OR',
  //     photo: `${this.BaseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
  //     availibleUnits: 6,
  //     wifi: true,
  //     laundry: true
  //   }
  // ];
  t = 1;
  // getAllHousingLocations(): Housinglocation[] {
  //   return this.housingLocationList;
  // }
  // getHousingLocationById(id: number): Housinglocation | undefined {
  //   return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  // }
  url = 'http://localhost:3000/locations';
  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
