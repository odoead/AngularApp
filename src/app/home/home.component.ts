import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = ([]);
  housingService: HousingService = inject(HousingService);
  filteredLocations: Housinglocation[] = [];
  // constructor() {
  //   this.housingLocationList = this.housingService.getAllHousingLocations();
  //   this.filteredLocations = this.housingLocationList;
  // }
  filterForm: FormGroup;

  //local usage
  // constructor(private formBuilder: FormBuilder) {
  //   //direct acess
  //   this.housingLocationList = this.housingService.getAllHousingLocations();
  //   this.filteredLocations = this.housingLocationList;
  //   //dynamic forms
  //   this.filterForm = this.formBuilder.group({
  //     city: ['']
  //   });
  // }
  constructor(private formBuilder: FormBuilder) {
    //dynamic forms
    this.filterForm = this.formBuilder.group({
      city: ['']
    });
    //direct acess
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocations = housingLocationList;

    });
  }
  filterResultsDirect(text: string) {
    if (!text) {
      this.filteredLocations = this.housingLocationList;
      return;
    }
    this.filteredLocations = this.housingLocationList.filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
  }
  filterResultsDynam() {
    const text = this.filterForm.value.city;
    if (!text) {
      this.filteredLocations = this.housingLocationList;
      return;
    }
    this.filteredLocations = this.housingLocationList.filter(housingLocation =>
      housingLocation.city.toLowerCase().includes(text.toLowerCase()));
  }

  // housingLocationData: Housinglocation = {
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: `${this.BaseUrl}/example-house.jpg`,
  //   availibleUnits: 99,
  //   wifi: true,
  //   laundry: false,
  // };
}
