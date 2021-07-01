import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';

const routes: Routes = [
  {path:'accomodation', component:AccomodationComponent},
  {path:'celebrations', component:CelebrationsComponent},
  {path:'food-beverage', component:FoodBeverageComponent},
  {path:'lifestyle', component:LifestyleComponent},
  {path:'wedding', component:WeddingsComponent},
  {path:'offers' , component:OffersComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
