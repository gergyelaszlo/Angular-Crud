import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { NgToastService } from "ng-angular-popup";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public signinForm!: FormGroup;

  constructor(private http: HttpClient, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      "email": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required]),
    });
  }

  get email() {
    return this.signinForm.get("email");
  }

  get password() {
    return this.signinForm.get("password");
  }

  signin() {
    this.http.get<any>("http://localhost:3000/userSignup")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.signinForm.value.email && a.password === this.signinForm.value.password;
        });
        if (user) {
          this.toast.success({detail: "Success message", summary: "Login successful!"});
          this.signinForm.reset();
          this.router.navigate(["home"]);
        } else {
          this.toast.error({detail: "Error message", summary: "User is not found. Please signup!"});
          this.signinForm.reset();
          this.router.navigate(["signup"]);
        }
      },error => {
        this.toast.error({detail: "Error message", summary: "Something went wrong." + error});
      });
  }

}
