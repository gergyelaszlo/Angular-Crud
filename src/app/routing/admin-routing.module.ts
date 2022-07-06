import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { MainAdminComponent } from "../components/admin/main-admin/main-admin.component";
import { AdminHomeComponent } from "../components/admin/admin-home/admin-home.component";
import { DashboardComponent } from "../components/admin/dashboard/dashboard.component";
import { DetailsComponent } from "../components/admin/details/details.component";
import { UsersComponent } from "../components/admin/users/users.component";

const routes: Routes = [
  {
    path: "",
    component: MainAdminComponent,
    children: [
      {
        path: "home",
        component: AdminHomeComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "details/:id",
        component: DetailsComponent
      },
      {
        path: "users",
        component: UsersComponent
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
export class AdminRoutingModule { }
