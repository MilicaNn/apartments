import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-double',
  templateUrl: './double.component.html',
  styleUrls: ['./double.component.css']
})
export class DoubleComponent {
  translatedParagraph?: SafeHtml;

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      this.translate.get('PARAGRAPH3').subscribe((res: string) => {
          this.translatedParagraph = this.sanitizer.bypassSecurityTrustHtml(res);
      });
  }
}
