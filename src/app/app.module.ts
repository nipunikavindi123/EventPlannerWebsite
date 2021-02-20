import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WebFooterComponent } from './web-footer/web-footer.component';
import { BlogComponent } from './blog/blog.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SupprofileComponent } from './supprofile/supprofile.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { EntertainingComponent } from './entertaining/entertaining.component';
import { TransportationComponent } from './transportation/transportation.component';
import { DecorationComponent } from './decoration/decoration.component';
import { PhotographyComponent } from './photography/photography.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    WebFooterComponent,
    BlogComponent,
    BlogHomeComponent,
    SupplierRegistrationComponent,
    CustomerRegistrationComponent,
    UserProfileComponent,
    SupprofileComponent,
    HospitalityComponent,
    EntertainingComponent,
    TransportationComponent,
    DecorationComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
