import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { tileLayer, latLng, marker } from "leaflet";
import { ApplicationService } from "src/app/services/application.service";
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private appService: ApplicationService
  ) { }
  options;
  layers: Array<any>;
  latlng;
  imageBase64;
  checkoutForm;
  error: string;

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      theme: '',
      description: '',

    });
    this.latlng  = {
      lat: 49.4188042,
      lng: 26.9723255
    }
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
  onMapClick(data){
    
    this.layers = [marker([data.latlng.lat, data.latlng.lng])];
    this.latlng.lat = data.latlng.lat;
    this.latlng.lng = data.latlng.lng;
  }
  onFileSelect(e){
    console.log('data',e)
    if (e.target.files.length) {
      const reader = new FileReader();
        reader.onload = ev => {
          if (reader.result) {
            reader.result // base64 image represantation
            this.imageBase64 = reader.result;
          }
        };
        reader.readAsDataURL(e.target.files[0]);
    }
  }
  onSubmit(formData) {
    console.log('formData', formData);
    let data = {
      title: formData.theme,
      description: formData.description,
      location: [this.latlng.lat, this.latlng.lng],
      photo: this.imageBase64
    }
    this.appService.createApplication(data).subscribe(
      (data: any) => {
        
      },
      err => {
        console.log(err);
        this.error = err.error.message;
      }
    );
    //this.checkoutForm.reset();
  }

}
