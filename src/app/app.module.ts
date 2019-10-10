import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { NavbarComponent } from './navbar/navbar.component';
import { MapViewComponent } from './map-view/map-view.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { RateComponent } from './pages/rate/rate.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, MapViewComponent, LoginComponent, AboutComponent, SupportComponent, RateComponent, FeedbackComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
