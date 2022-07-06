import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NgToastModule } from "ng-angular-popup";
import { NgxPaginationModule } from "ngx-pagination";
import { RouterModule } from "@angular/router";
import { AdminRoutingModule } from './routing/admin-routing.module';
import { UserRoutingModule } from './routing/user-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

import { routerConfig } from "./routing/configRoutes";
import { HomeComponent } from './components/user/home/home.component';
import { AboutComponent } from './components/user/about/about.component';
import { DetailsComponent } from './components/admin/details/details.component';
import { AdminNavigationComponent } from './components/admin/admin-navigation/admin-navigation.component';
import { UserNavigationComponent } from './components/user/user-navigation/user-navigation.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { MainAdminComponent } from './components/admin/main-admin/main-admin.component';
import { MainUserComponent } from './components/user/main-user/main-user.component';
import { UsersComponent } from './components/admin/users/users.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { UserDetailsComponent } from './components/admin/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    AdminNavigationComponent,
    UserNavigationComponent,
    AdminHomeComponent,
    MainAdminComponent,
    MainUserComponent,
    UsersComponent,
    SignupComponent,
    SigninComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    NgxPaginationModule,
    RouterModule,
    RouterModule.forRoot(routerConfig),
    AdminRoutingModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
