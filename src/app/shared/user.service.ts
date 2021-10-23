import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Forum} from "./forum";
import {Users} from "./Users";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userListRef: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createUser(apt: Users) {
    console.log(this.userListRef);
    return this.userListRef.push({
      firstname: apt.firstname,
      lastname: apt.lastname,
      birthdate: apt.birthdate,
      gender: apt.gender,
      email: apt.email,
      password: apt.password,
    })
  }

  // Get Single
  getUser(id: string) {
    this.userRef = this.db.object('/user/' + id);
    return this.userRef;
  }

  // Get List
  getUserList() {
    this.userListRef = this.db.list('/user');
    return this.userListRef;
  }

  // Update
  updateUser(id: any, apt: Users) {
    return this.userRef.update({
      firstname: apt.firstname,
      lastname: apt.lastname,
      birthdate: apt.birthdate,
      gender: apt.gender,
      email: apt.email,
      password: apt.password,
    })
  }

  // Delete
  deleteUser(id: string) {
    this.userRef = this.db.object('/forum/' + id);
    this.userRef.remove();
  }
}
