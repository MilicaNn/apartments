import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';

//ovde upisujemo putanje tj rute ka nasim komponentama
const routes: Routes = [
  {path:'accomodation', component:AccomodationComponent},
  {path:'celebrations', component:CelebrationsComponent},
  {path:'food-beverage', component:FoodBeverageComponent},
  //ovde smo napravili novu putanju da bi mogi da koristimo zbog specijalnog naziva
  //food - beverage
  {path: 'foodbeverage', 
   redirectTo:'food-beverage',
   pathMatch:'full'},
  {path:'lifestyle', component:LifestyleComponent},
  {path:'weddings', component:WeddingsComponent},
  {path:'offers', component:OffersComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'',component:HomeComponent}
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