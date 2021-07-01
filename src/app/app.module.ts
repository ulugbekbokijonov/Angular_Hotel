import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import {AccomodationComponent} from './accomodation/accomodation.component';
import {RoomComponent} from './accomodation/room/room.component';
import {AuthComponent} from './auth/auth.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {CelebrationsComponent} from './celebrations/celebrations.component';
import {FoodBeverageComponent} from './food-beverage/food-beverage.component';
import {BarsComponent} from './food-beverage/bars/bars.component';
import {RestaurantComponent} from './food-beverage/restaurant/restaurant.component';
import {LifestyleComponent} from './lifestyle/lifestyle.component';
import {ExcursionsComponent} from './lifestyle/excursions/excursions.component'
import {ExperiencesComponent} from './lifestyle/experiences/experiences.component';
import {ResortActivitiesComponent} from './lifestyle/resort-activities/resort-activities.component';
import {WelnessAndSpaComponent} from './lifestyle/welness-and-spa/welness-and-spa.component';
import {OffersComponent} from './offers/offers.component';
import {WeddingsComponent} from './weddings/weddings.component';
import {ThaiWeddingsComponent} from './weddings/thai-weddings/thai-weddings.component';
import {WesternWeddingsComponent} from './weddings/western-weddings/western-weddings.component'


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    CelebrationsComponent,
    FoodBeverageComponent,
    BarsComponent,
    RestaurantComponent,
    LifestyleComponent,
    ExcursionsComponent,
    ExperiencesComponent,
    ResortActivitiesComponent,
    WelnessAndSpaComponent,
    OffersComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternWeddingsComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
