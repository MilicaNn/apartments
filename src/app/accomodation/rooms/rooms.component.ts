import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
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




