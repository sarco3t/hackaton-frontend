import { Component, OnInit, AfterViewInit } from "@angular/core";
import { tileLayer, latLng, marker } from "leaflet";

@Component({
  selector: "app-map-view",
  templateUrl: "./map-view.component.html",
  styleUrls: ["./map-view.component.scss"]
})
export class MapViewComponent implements OnInit, AfterViewInit {
  constructor() {}
  options;
  layers: Array<any>;
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
    this.layers = [marker([49.4188042, 26.9723255])];
  }
  ngAfterViewInit() {}
}
