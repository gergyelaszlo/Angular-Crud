import { Routes } from "@angular/router";
import { SignupComponent } from "../components/signup/signup.component";
import { SigninComponent } from "../components/signin/signin.component";

export const routerConfig: Routes = [
  {
    path: "",
    redirectTo: "/user/home",
    pathMatch: "full"
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "user",
    loadChildren: () => import("../routing/user-routing.module").then((u) => u.UserRoutingModule)
  },
  {
    path: "admin",
    loadChildren: () => import("../routing/admin-routing.module").then((a) => a.AdminRoutingModule)
  }
];
