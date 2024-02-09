import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //ovo nam pomaze da slusamo sa spoljne strane, zato sluzi dekorator @Output
  @Output() SideNavigationToggle=new EventEmitter();


 

ngOnInit(){}

onToggleOpenSidenav(){
  this.SideNavigationToggle.emit();

}
navbarfixed:boolean=false;
  
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY>100){
      this.navbarfixed=true;
    }
  else{
    this.navbarfixed=false;
  }

}

// constructor(private translate: TranslateService) {
//   // Postavite podrazumevani jezik
//   translate.setDefaultLang('en');
// }

// switchLanguage(language: string) {
//   // Promena jezika
//   this.translate.use(language);
// }
  constructor(private translate: TranslateService) {
    // Postavite podrazumevani jezik
    translate.setDefaultLang('en');
  
    // Učitajte prevode za sve jezike
    translate.use('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  


}
