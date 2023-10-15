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
        'http://localhost:4200/assets/img/double/doublerooms1.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'http://localhost:4200/assets/img/double/doublerooms2.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'http://localhost:4200/assets/img/double/doublerooms3.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'http://localhost:4200/assets/img/double/doublerooms4.jpg',
      imageAlt: 'person2',
    },
  ]

 
}




