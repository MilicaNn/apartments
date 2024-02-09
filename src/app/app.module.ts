import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';

import{ AccordionModule } from 'ngx-bootstrap/accordion';
import{ModalModule} from 'ngx-bootstrap/modal';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { ContactComponent } from './contact/contact.component';
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
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from "./carousel/carousel.module";
import { FooterComponent } from './navigation/footer/footer.component';
import { ApartmentsComponent } from './accomodation/apartments/apartments.component';
import { StudioComponent } from './accomodation/apartments/studio/studio.component';
import { LogCabinComponent } from './accomodation/log-cabin/log-cabin.component';
import { FirstComponent } from './accomodation/log-cabin/first/first.component';
import { DoubleComponent } from './accomodation/rooms/double/double.component';
import { SingleComponent } from './accomodation/rooms/single/single.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { GalleryComponent } from './gallery/gallery.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import {MatNativeDateModule} from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import {MatDatepickerModule} from '@angular/material/datepicker';

import { DomSanitizer } from '@angular/platform-browser';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
 }

@NgModule({
    declarations: [
        AppComponent,
        AccomodationComponent,
        RoomsComponent,
        GalleryComponent,
        ContactComponent,
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
        FullCalendarModule,
        AccordionModule,
        ModalModule.forRoot(),
        CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
       

        
    
        
    ],
    exports: [
        HeaderComponent,
      FooterComponent,
      LightgalleryModule,
  ],
})
export class AppModule {}
