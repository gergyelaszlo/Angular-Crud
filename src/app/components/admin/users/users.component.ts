import { Component, OnInit } from '@angular/core';
import { UserHandlingService } from "../../../service/user-handling.service";
import { UserModel } from "../../../model/user-model";
import { NgToastService } from "ng-angular-popup";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUserData: any;

  constructor(private api: UserHandlingService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(res => {
      this.allUserData = res;
    });
  }

  deleteUserFromList(user: UserModel) {
    this.api.deleteUser(user).subscribe(resp => {
      this.toast.success({detail: "Success message", summary: "User successfully deleted!"});
    });
  }

}
