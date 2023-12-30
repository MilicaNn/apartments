import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { ApartmentsComponent } from './accomodation/apartments/apartments.component';
import { StudioComponent } from './accomodation/apartments/studio/studio.component';
import { FirstComponent } from './accomodation/log-cabin/first/first.component';
import { LogCabinComponent } from './accomodation/log-cabin/log-cabin.component';
import { DoubleComponent } from './accomodation/rooms/double/double.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { SingleComponent } from './accomodation/rooms/single/single.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';

//ovde upisujemo putanje tj rute ka nasim komponentama
const routes: Routes = [
  {path:'accomodation', component:AccomodationComponent},
  //ovde smo napravili novu putanju da bi mogi da koristimo zbog specijalnog naziva
  //food - beverage
  // {path: 'foodbeverage', 
  //  redirectTo:'food-beverage',
  //  pathMatch:'full'},
  {path:'gallery', component:GalleryComponent},
  {path:'contact', component:ContactComponent},
  {path:'offers', component:OffersComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},

  {path:'',component:HomeComponent},

  {path:'apartments', component:ApartmentsComponent},
  {path:'studio', component:StudioComponent},
  {path:'logCabin', component:LogCabinComponent},
 
  {path:'rooms', component:RoomsComponent},
  {path:'single', component:SingleComponent},
  {path:'double', component:DoubleComponent},
  {path:'first', component:FirstComponent},
];

//po definiciji importujemo i exxportujemo RouterModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//AppRoutingModule importujemo u app.module.ts
export class AppRoutingModule { }

//exportujemo appRoutingModule da bi mogi da koristimo routing
//imortujemo Ng module