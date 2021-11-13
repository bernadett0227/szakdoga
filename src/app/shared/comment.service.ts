import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import firebase from "firebase";
import {Comment} from "./comment"

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  commentListRef: AngularFireList<any>;
  commentRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createComment(apt: Comment) {
    let user = firebase.auth().currentUser;
    console.log(this.commentListRef);
    return this.commentListRef.push({
      comment: apt.comment,
      user: user.email,
      id: apt.id,
      date: apt.date
    })
  }
// Get Single
  getComment(id: string) {
    this.commentRef = this.db.object('/comment/' + id);
    return this.commentRef;
  }

  // Get List
  getCommentList() {
    this.commentListRef = this.db.list('/comment');
    return this.commentListRef;
  }

}
