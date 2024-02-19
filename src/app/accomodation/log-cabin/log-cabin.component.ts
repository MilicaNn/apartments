import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-log-cabin',
  templateUrl: './log-cabin.component.html',
  styleUrls: ['./log-cabin.component.css']
})
export class LogCabinComponent {
  translatedParagraph?: SafeHtml;

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      this.translate.get('PARAGRAPH5').subscribe((res: string) => {
          this.translatedParagraph = this.sanitizer.bypassSecurityTrustHtml(res);
      });
  }
}
