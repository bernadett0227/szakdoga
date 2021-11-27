import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {News} from "./news";

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  newsListRef: AngularFireList<any>;
  newsRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createNews(apt: News) {
    return this.newsListRef.push({
      date: apt.date,
      url: apt.url,
      leiras: apt.leiras,
      title: apt.title,
      user: apt.user,
    })
  }

  // Get Single
  getNews(id: string) {
    this.newsRef = this.db.object('/news/' + id);
    return this.newsRef;
  }

  // Get List
  getNewsList() {
    this.newsListRef = this.db.list('/news');
    return this.newsListRef;
  }

  // Update
  updateNews(id: any, apt: News) {
    return this.newsRef.update({
      date: apt.date,
      leiras: apt.leiras,
      url: apt.url,
      title: apt.title,
    })
  }

  // Delete
  deleteNews(id: string) {
    this.newsRef = this.db.object('/news/' + id);
    this.newsRef.remove();
  }
}
