import { Component, OnInit } from "@angular/core";
import { ApplicationService } from "src/app/services/application.service";

@Component({
  selector: "app-user-applications",
  templateUrl: "./user-applications.component.html",
  styleUrls: ["./user-applications.component.scss"]
})
export class UserApplicationsComponent implements OnInit {
  constructor(private appService: ApplicationService) {
    this.applications = [];
  }
  applications: Array<any>;
  ngOnInit() {
    this.appService.userApplications().subscribe((data: any) => {
      if (!data.error) {
        data.model.forEach(app => {
          this.applications.push(app);
        });
      }
    });
  }
}
