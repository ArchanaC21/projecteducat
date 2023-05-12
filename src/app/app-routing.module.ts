import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewComponent } from './new/new.component';
import { DataComponent } from './Operations/login/data/data.component';
import { LoginComponent } from './Operations/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LandingComponent } from './landing/landing/landing.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './components/varify-email/varify-email.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CourseMasterComponent } from './masters/course-master/course-master.component';
import { CourseSingleComponent } from './masters/course-single/course-single.component';
// import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'registration', component: RegistrationComponent },

  { path: 'header', component: HeaderComponent },

  { path: 'footer', component: FooterComponent },

  { path: 'data', component: DataComponent },

  { path: 'new', component: NewComponent },

  { path: 'landing', component: LandingComponent },

  { path: 'home', component: HomeComponent },

  { path: 'varifyemail', component: VarifyEmailComponent },

  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: 'dashboard', component: DashboardComponent },

  { path:'course',component:CourseMasterComponent },

  {path:'course-single',component:CourseSingleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
