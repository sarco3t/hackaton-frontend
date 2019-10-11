import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment as env } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  applications() {
    return this.http.get(env.apiUrl + "application");
  }
  userApplications(userId) {
    return this.http.get(env.apiUrl + `application?userId=${userId}`);
  }
  createApplication(data){
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('auth_token'))
    console.log('myHeaders',myHeaders);
    return this.http.post(env.apiUrl + `application`, data, {headers:myHeaders});
  }
}
