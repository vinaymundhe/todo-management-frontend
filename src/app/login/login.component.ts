import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username = "vinaymundhe";
  password = "";
  errorMessage = "Invalid Credentials!";
  invalidLogin = false;

  constructor(private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  handleLogin() {
    // if (this.username === "vinaymundhe" && this.password === "dummy") {

    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
    console.log(this.username);
    console.log(this.password);
  }
}