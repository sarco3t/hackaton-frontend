import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "src/environments/environment";
import { UserService } from "../user.service";

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  constructor(private http: HttpClient, private userService: UserService) {}

  applications() {
    return this.http.get(env.apiUrl + "application");
  }
  userApplications() {
    const userId = this.userService.userData()._id;
    return this.http.get(env.apiUrl + `application?userId=${userId}`);
  }
}
