import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,
    RouterModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  // exptitle:String;
  route: ActivatedRoute = inject(ActivatedRoute);
  HousingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  //locacl
  // constructor() {
  //   const houseLocationId = Number(this.route.snapshot.params['id']);
  //   this.housingLocation = this.HousingService.getHousingLocationById(houseLocationId);
  // }
  constructor() {
    // consttitle:String;
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.HousingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }
  submitApplication() {
    this.HousingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}




