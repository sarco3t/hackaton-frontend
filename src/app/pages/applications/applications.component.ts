import { Component, OnInit } from "@angular/core";
import { ApplicationService } from "src/app/services/application.service";

@Component({
  selector: "app-applications",
  templateUrl: "./applications.component.html",
  styleUrls: ["./applications.component.scss"]
})
export class ApplicationsComponent implements OnInit {
  applications: Array<Object>;
  error: string;
  constructor(private appService: ApplicationService) {}

  ngOnInit() {
    this.appService.applications().subscribe(
      (data: any) => {
        this.applications = data.model;
      },
      err => {
        console.log(err);
        this.error = err.error.message;
      }
    );
  }
}
