import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
}
