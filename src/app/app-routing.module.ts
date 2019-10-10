import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from './pages/register/register.component';
import { MapViewComponent } from "./pages/map-view/map-view.component";
import { AboutComponent } from "./pages/about/about.component";
import { SupportComponent } from "./pages/support/support.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "map",
    component: MapViewComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "support",
    component: SupportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
