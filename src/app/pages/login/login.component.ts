import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      login: "",
      password: ""
    });
  }

  loginForm;
  ngOnInit() {}

  get logged(): boolean {
    return this.userService.isLogged();
  }

  onSubmit(formValue) {
    console.log('login')
    this.userService.loginUser(formValue).subscribe(data => {
      console.log("data :", data);
      this.loginForm.reset();
    });
  }
}
