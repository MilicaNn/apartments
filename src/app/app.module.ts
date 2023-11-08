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
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
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
import { LightgalleryModule } from 'lightgallery/angular';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from "./carousel/carousel.module";
import { FooterComponent } from './navigation/footer/footer.component';
import { ApartmentsComponent } from './accomodation/apartments/apartments.component';
import { StudioComponent } from './accomodation/apartments/studio/studio.component';
import { LogCabinComponent } from './accomodation/log-cabin/log-cabin.component';
import { FirstComponent } from './accomodation/log-cabin/first/first.component';
import { DoubleComponent } from './accomodation/rooms/double/double.component';
import { SingleComponent } from './accomodation/rooms/single/single.component';
import { UpdatrpopupComponent } from './updatrpopup/updatrpopup.component';
import { UserlistingComponent } from './userlisting/userlisting.component';






@NgModule({
    declarations: [
        AppComponent,
        AccomodationComponent,
        RoomsComponent,
        FoodBeverageComponent,
        LifestyleComponent,
        WeddingsComponent,
        CelebrationsComponent,
        OffersComponent,
        AuthComponent,
        SigninComponent,
        SignupComponent,
        HomeComponent,
        HeaderComponent,
        SidenavListComponent,
        NavtabsComponent,
        FooterComponent,
        ApartmentsComponent,
        StudioComponent,
        LogCabinComponent,
        FirstComponent,
        DoubleComponent,
        SingleComponent,
        UpdatrpopupComponent,
        UserlistingComponent,
        
        
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
        CarouselModule,
        LightgalleryModule,
        
    ],
    exports: [
        HeaderComponent,
      FooterComponent,
      LightgalleryModule,
  ],
})
export class AppModule {}
