import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { RestaurantComponent } from './food-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-beverage/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WelnessAndSpaComponent } from './lifestyle/welness-and-spa/welness-and-spa.component';
import { ResortActivitesComponent } from './lifestyle/resort-activites/resort-activites.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

import { NgImageSliderModule } from 'ng-image-slider';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from "./carousel/carousel.module";






@NgModule({
    declarations: [
        AppComponent,
        AccomodationComponent,
        RoomsComponent,
        FoodBeverageComponent,
        RestaurantComponent,
        BarsComponent,
        LifestyleComponent,
        WelnessAndSpaComponent,
        ResortActivitesComponent,
        ExperiencesComponent,
        ExcursionsComponent,
        WeddingsComponent,
        ThaiWeddingsComponent,
        WesternWeddingsComponent,
        CelebrationsComponent,
        OffersComponent,
        AuthComponent,
        SigninComponent,
        SignupComponent,
        HomeComponent,
        HeaderComponent,
        SidenavListComponent,
        NavtabsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        NgImageSliderModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        CarouselModule
    ]
})
export class AppModule { }
