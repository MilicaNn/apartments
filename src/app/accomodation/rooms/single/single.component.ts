import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from 'src/app/navigation/footer/footer.component';



@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})


export class SingleComponent {
  translatedParagraph?: SafeHtml;

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      this.translate.get('PARAGRAPH2').subscribe((res: string) => {
          this.translatedParagraph = this.sanitizer.bypassSecurityTrustHtml(res);
      });


}
amenities: { icon: string, name: string }[] = [
  { icon: 'single_bed', name: 'AMENITY_SINGLE_BED' },
  { icon: 'wifi', name: 'AMENITY_FREE_WIFI' },
  { icon: 'desk', name: 'AMENITY_DESK' },
  { icon: 'inventory_2', name: 'AMENITY_WARDROBE' },
  { icon: 'checkroom', name: 'AMENITY_CHECKROOM' },
  { icon: 'tv', name: 'AMENITY_TELEVISION' },
  { icon: 'panorama', name: 'AMENITY_VIEW' },
  { icon: 'local_parking', name: 'AMENITY_FREE_PARKING' },
  { icon: 'bathroom', name: 'AMENITY_SHARED_BATHROOM' },
  { icon: 'multicooker', name: 'AMENITY_SHARED_KITCHEN' },
  { icon: 'stockpot', name: 'AMENITY_KITCHEN_UTENSILS' },
  { icon: 'pets', name: 'AMENITY_PETS_ALLOWED' }
];
}
