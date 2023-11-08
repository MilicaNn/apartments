import { Component } from '@angular/core';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent {
  images = [
    {
      imageSrc:
        'http://localhost:4200/assets/img/single/single.jpg',
      imageAlt: 'single1',
    },
    {
      imageSrc:
        'http://localhost:4200/assets/img/single/singleroom.avif',
      imageAlt: 'single2',
    },
    {
      imageSrc:
        'http://localhost:4200/assets/img/single/singleroomm.jpg',
      imageAlt: 'single3',
    },
  ]
  images2 = [
    {
      imageSrc:
        'http://localhost:4200/assets/img/double/double.jpg',
      imageAlt: 'double1',
    },
    {
      imageSrc:
        'http://localhost:4200/assets/img/double/doublerooms1.jpg',
      imageAlt: 'double2',
    },
    {
      imageSrc:
        'http://localhost:4200/assets/img/double/doublerooms2.jpg',
      imageAlt: 'double3',
    },
  ]
 
}
