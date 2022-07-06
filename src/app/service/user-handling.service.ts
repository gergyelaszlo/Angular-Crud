import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Observable } from "rxjs";
import { UserModel } from "../model/user-model";

const userUrl = "http://localhost:3000/userSignup";

@Injectable({
  providedIn: 'root'
})
export class UserHandlingService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(userUrl).pipe(map((resp: any) => {
      return resp;
    }));
  }

  getOneUser(id: any) {
    return this.http.get<any>(`${userUrl}/${id}`).pipe(map((resp: any) => {
      return resp;
    }));
  }

  updateUser(user: any, id: number) {
    return this.http.put<any>(`${userUrl}/${id}`, user).pipe(map((resp: any) => {
      return resp;
    }));
  }

  deleteUser(user: UserModel): Observable<UserModel> {
    return this.http.delete<UserModel>("http://localhost:3000/books/" + '/' + user.id).pipe(map((resp: any) => {
      return resp;
    }));
  }

}
