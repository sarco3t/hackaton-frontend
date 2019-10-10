import { Component, OnInit } from "@angular/core";
import { ApplicationService } from "src/app/services/application.service";
import { tileLayer, latLng, marker } from "leaflet";

@Component({
  selector: "app-applications",
  templateUrl: "./applications.component.html",
  styleUrls: ["./applications.component.scss"]
})
export class ApplicationsComponent implements OnInit {
  applications: Array<Object>;
  error: string;
  options;
  markers;
  constructor(private appService: ApplicationService) {}
  ngOnInit() {
    this.options = {
      layers: [
        tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "..."
        })
      ],
      zoom: 13,
      center: latLng(49.4188042, 26.9723255)
    };

    this.appService.applications().subscribe(
      (data: any) => {
        this.applications = data.model;
        this.applications.forEach((app: any) => {
          const cords = app.coordinates;
          this.markers.push(marker([cords[0], cords[1]]));
        });
      },
      err => {
        console.log(err);
        this.error = err.error.message;
      }
    );
  }
}