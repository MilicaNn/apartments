import { Component } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css'],

})
export class StudioComponent {

 
  translatedParagraph?: SafeHtml;

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      this.translate.get('PARAGRAPH4').subscribe((res: string) => {
          this.translatedParagraph = this.sanitizer.bypassSecurityTrustHtml(res);
      });
  }
//   imageObject: Array<object> = [{
//     image: 'http://localhost:4200/assets/img/single/singleroom.avif',
//      thumbImage: 'http://localhost:4200/assets/img/single/singleroom.avif',
//      alt: 'alt of image',
//     title: 'title of image'
//  }];

}
