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
        'http://localhost:4200/assets/img/double/db2.jpg',
      imageAlt: 'double2',
    },
    {
      imageSrc:
        'http://localhost:4200/assets/img/double/db3.jpg',
      imageAlt: 'double3',
    },
    {
      imageSrc:
        'http://localhost:4200/assets/img/double/db4.jpg',
      imageAlt: 'double4',
    },
    {
      imageSrc:
        'http://localhost:4200/assets/img/double/db5.jpg',
      imageAlt: 'double5',
    },
  ]
  images3 = [
    {
      imageSrc:
        'http://localhost:4200/assets/img/triple/rm.png',
      imageAlt: 'single1',
    },
    {
      imageSrc:
      'http://localhost:4200/assets/img/triple/st1.png',
      imageAlt: 'single2',
    },
    {
      imageSrc:
      'http://localhost:4200/assets/img/triple/st3.png',
      imageAlt: 'single3',
    },
    {
      imageSrc:
      'http://localhost:4200/assets/img/triple/st4.png',
      imageAlt: 'single3',
    },
    {
      imageSrc:
      'http://localhost:4200/assets/img/triple/kk3.png',
      imageAlt: 'single3',
    },
  ]
  images4 = [
    {
      imageSrc:
      'http://localhost:4200/assets/img/triple/st4.png',
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
 
}
