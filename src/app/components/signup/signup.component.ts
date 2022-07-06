import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { NgToastService } from "ng-angular-popup";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;

  constructor(private http: HttpClient, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "name": new FormControl(null, [Validators.required]),
      "email": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required]),
      "passwordAgain": new FormControl(null, [Validators.required]),
    });
  }

  get name() {
    return this.signupForm.get("name");
  }

  get email() {
    return this.signupForm.get("email");
  }

  get password() {
    return this.signupForm.get("password");
  }

  get passwordAgain() {
    return this.signupForm.get("passwordAgain");
  }

  signUp() {
    this.http.post<any>("http://localhost:3000/userSignup", this.signupForm.value)
      .subscribe(res => {
        this.toast.success({detail: "Success message", summary: "You are signed up!"});
        this.signupForm.reset();
        this.router.navigate(["login"]);
      }, err => {
        this.toast.error({detail: "Error message", summary: "Something went wrong while singing up." + err});
      });
  }

}
