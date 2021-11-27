import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Forum} from "./forum";

@Injectable({
  providedIn: 'root'
})

export class ForumService {
  forumListRef: AngularFireList<any>;
  forumRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createForum(apt: Forum) {
    console.log(this.forumListRef);
    return this.forumListRef.push({
      date: apt.date,
      desc: apt.desc,
      title: apt.title,
      username: apt.username,
    })
  }

  // Get Single
  getForum(id: string) {
    this.forumRef = this.db.object('/forum/' + id);
    return this.forumRef;
  }

  // Get List
  getForumList() {
    this.forumListRef = this.db.list('/forum');
    return this.forumListRef;
  }

  // Update
  updateForum(id: any, apt: Forum) {
    return this.forumRef.update({
      date: apt.date,
      desc: apt.desc,
      username: apt.username,
    })
  }

  // Delete
  deleteForum(id: string) {
    this.forumRef = this.db.object('/forum/' + id);
    this.forumRef.remove();
  }
}
