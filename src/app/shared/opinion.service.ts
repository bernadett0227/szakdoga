import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import firebase from "firebase";
import {Opinion} from "./opinion"

@Injectable({
  providedIn: 'root'
})

export class OpinionService {
  opinionListRef: AngularFireList<any>;
  opinionRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createOpinion(apt: Opinion) {
    let user = firebase.auth().currentUser;
    console.log(this.opinionListRef);
    return this.opinionListRef.push({
      opinion: apt.opinion,
      user: user.email,
      rate: apt.rate,
      id: apt.id,
    })
  }
// Get Single
  getOpinion(id: string) {
    this.opinionRef = this.db.object('/opinion/' + id);
    return this.opinionRef;
  }

  // Get List
  getOpinionList() {
    this.opinionListRef = this.db.list('/opinion');
    return this.opinionListRef;
  }

  // Update
  updateOpinion(id: any, apt: Opinion) {
    return this.opinionRef.update({
      opinion: apt.opinion,
      rate: apt.rate,
      user: apt.user,
    })
  }

  // Delete
  deleteOpinion(id: string) {
    this.opinionRef = this.db.object('/opinion/' + id);
    this.opinionRef.remove();
  }
}
