import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //ovo nam pomaze da slusamo sa spoljne strane, zato sluzi dekorator @Output
  @Output() SideNavigationToggle=new EventEmitter();


  constructor(){}

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
}
