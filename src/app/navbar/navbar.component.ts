import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  menu: boolean;
  ngOnInit() {}

  get logged(): boolean {
    return this.userService.isLogged();
  }
  togglerClick() {
    this.menu = !this.menu;
  }
  logout() {
    this.userService.logout();
    this.router.navigate(["/"]);
  }
}
