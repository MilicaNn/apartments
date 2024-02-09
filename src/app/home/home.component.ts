import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  translatedParagraph?: SafeHtml;

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      this.translate.get('PARAGRAPH').subscribe((res: string) => {
          this.translatedParagraph = this.sanitizer.bypassSecurityTrustHtml(res);
      });
  }
}
