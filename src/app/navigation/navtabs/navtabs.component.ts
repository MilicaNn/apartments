import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css'],
   
})
export class NavtabsComponent {
 
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
