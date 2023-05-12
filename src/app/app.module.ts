import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Operations/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './Operations/login/data/data.component';
import { LandingComponent } from './landing/landing/landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
import { NewComponent } from './new/new.component';
import { ChildComponent } from './child/child.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './components/varify-email/varify-email.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CourseMasterComponent } from './masters/course-master/course-master.component';
import { CourseSingleComponent } from './masters/course-single/course-single.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    DataComponent,
    LandingComponent,
    NewComponent,
    ChildComponent,
    HomeComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    DashboardComponent,
    CourseMasterComponent,
    CourseSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


