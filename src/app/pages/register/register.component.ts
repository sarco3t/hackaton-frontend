import { Component, OnInit } from "@angular/core";
import { UserService } from "../../user.service";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      login: "",
      password: "",
      address: "",
      name: this.formBuilder.group(
        {
          first: "",
          last: ""
        }
      ),
      // passwordConfirmation: "",
      phoneNumber: ""
    });
  }
  ngOnInit() {}

  onSubmit(formValue: Object) {
    this.userService.registerUser({
      role: "user",
      ...formValue
    }).subscribe((data: any) => {
      console.log(data)
      this.registerForm.reset();
    });
    
  }
}
