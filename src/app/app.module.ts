import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

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

import { RegisterComponent } from './pages/register/register.component';
import { ApplicationComponent } from './pages/application/application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthInterceptor } from './auth-interceptor';
import { ApplicationsComponent } from './pages/applications/applications.component';


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
    MapViewComponent,
    RegisterComponent,
    ApplicationComponent,

    ApplicationsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LeafletModule,

    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
