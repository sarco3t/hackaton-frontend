import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UserService } from "src/app/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      login: "",
      password: ""
    });
  }

  loginForm;
  ngOnInit() {}
  error: string;
  get logged(): boolean {
    return this.userService.isLogged();
  }

  onSubmit(formValue) {
    this.error = ''
    this.userService.loginUser(formValue).subscribe(
      data => {
        if (data.user) {
          this.loginForm.reset();
          this.router.navigateByUrl("/applications");
          return
        }
        this.error = "Хибний логін або пароль"
      }
    );
  }
}
