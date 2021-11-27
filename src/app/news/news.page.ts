import { Component, OnInit } from '@angular/core';
import {ForumService} from "../shared/forum.service";
import {Forum} from "../shared/forum";
import {NewsService} from "../shared/news.service";
import {News} from "../shared/news";
import {AuthenticationService} from "../shared/authentication-service";

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  News = [];

  constructor(private aptService: NewsService, public authService: AuthenticationService) {
  }

  ngOnInit() {
    this.fetchNews();
    let newsRes = this.aptService.getNewsList();
    newsRes.snapshotChanges().subscribe(res => {
      this.News = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.News.push(a as News);
      })
    })
  }

  fetchNews() {
    this.aptService.getNewsList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  getNews(id) {
    console.log(id);
    this.aptService.getNews(id)

  }
}
