import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  applications() {
    return this.http.get(env.apiUrl);
  }
}
