import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { MainUserComponent } from "../components/user/main-user/main-user.component";
import { HomeComponent } from "../components/user/home/home.component";
import { AboutComponent } from "../components/user/about/about.component";

const routes: Routes = [
  {
    path: "",
    component: MainUserComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "about",
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }
