import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";
import { environment as env } from "src/environments/environment";

export const AUTH_TOKEN_KEY = "auth_token";
export const USER_KEY = "user_data";
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(data: Object) {
    return this.http
      .post(env.apiUrl + "register", data)
      .pipe(tap(this.setSession))
      .pipe(catchError(val => of(`I caught: ${val}`)));
  }

  loginUser(data: Object) {
    return this.http
      .post(env.apiUrl + "login", data)
      .pipe(tap(this.setSession))
      .pipe(catchError(val => of(`I caught: ${val}`)));
  }

  userData(): any {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  setSession(authResult) {
    console.log("authResult :", authResult);
    localStorage.setItem(AUTH_TOKEN_KEY, authResult.token);
    localStorage.setItem(USER_KEY, JSON.stringify(authResult.user));
  }
  logout() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  isLogged(): boolean {
    return localStorage.getItem(AUTH_TOKEN_KEY) !== null;
  }

  handleError(error: HttpErrorResponse) {}
}
