import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ForumService} from '../shared/forum.service';
import firebase from "firebase";

@Component({
  selector: 'app-add-forums',
  templateUrl: './add-forums.page.html',
  styleUrls: ['./add-forums.page.scss'],
})
export class AddForumsPage implements OnInit {

  forumForm: FormGroup;

  constructor(private aptService: ForumService,
              private router: Router,
              public fb: FormBuilder) { }

  ngOnInit() {
    let user = firebase.auth().currentUser;
    let date = new Date().toLocaleDateString();
    this.forumForm = this.fb.group({
      date: [date],
      desc: [''],
      title: [''],
      username: [user.email],
    });
  }

 formSubmit(){
    if (!this.forumForm.valid) {
      return false;
    } else {
      this.aptService.createForum(this.forumForm.value).then(res => {
        this.forumForm.reset();
        this.router.navigate(['/list-forums']);
      })
        .catch(error => console.log(error));
    }
  }
}
