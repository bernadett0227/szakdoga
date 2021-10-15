import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Programs} from "./Programs";
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})

export class ProgramsService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt: Programs) {
    let user = firebase.auth().currentUser;
    console.log(this.bookingListRef);
    return this.bookingListRef.push({
      megnevezes: apt.megnevezes,
      leiras: apt.leiras,
      kezdo_datum: apt.kezdo_datum,
      befejezo_datum: apt.befejezo_datum,
      helyszin: apt.helyszin,
      email: user.email,
      mobil: apt.mobil,
      napok_szama: apt.befejezo_datum.valueOf() - apt.kezdo_datum.valueOf(),
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/programs/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/programs');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id: any, apt: Programs) {
    return this.bookingRef.update({
      megnevezes: apt.megnevezes,
      leiras: apt.leiras,
      kezdo_datum: apt.kezdo_datum,
      befejezo_datum: apt.befejezo_datum,
      helyszin: apt.helyszin,
      email: apt.email,
      mobil: apt.mobil,
      napok_szama: apt.napok_szama,
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/programs/' + id);
    this.bookingRef.remove();
  }
}
