import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public showLogin;

  ngOnInit() {
    this.showLogin = true;
    console.log('this.showLogin',this.showLogin);
  }

}
