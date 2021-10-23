import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NewsService} from "../shared/news.service";
import {Router} from "@angular/router";
import firebase from "firebase";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.page.html',
  styleUrls: ['./add-news.page.scss'],
})
export class AddNewsPage implements OnInit {
  newsForm: FormGroup;

  constructor(private aptService: NewsService,
              private router: Router,
              public fb: FormBuilder) { }

  ngOnInit() {
    let user = firebase.auth().currentUser;
    let date = new Date().toLocaleDateString();
    console.log(date);
    this.newsForm = this.fb.group({
      date: [date],
      title: [''],
      leiras: [''],
      user: [user.email],
      url: [''],
    });
  }

  formSubmit(){
    if (!this.newsForm.valid) {
      return false;
    } else {
      console.log(this.aptService);
      this.aptService.createNews(this.newsForm.value).then(res => {
        console.log(res);
        this.newsForm.reset();
        this.router.navigate(['/news']);
      })
        .catch(error => console.log(error));
    }
  }
}





