import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./pages/about/about.component";
import { SupportComponent } from "./pages/support/support.component";
import { RateComponent } from "./pages/rate/rate.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";
import { MapViewComponent } from "./pages/map-view/map-view.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
    SupportComponent,
    RateComponent,
    FeedbackComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
