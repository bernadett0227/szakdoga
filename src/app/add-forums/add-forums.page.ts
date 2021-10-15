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
    console.log(date);
    this.forumForm = this.fb.group({
      date: [date],
      desc: [''],
      username: [user.email],
    });
  }

 formSubmit(){
    if (!this.forumForm.valid) {
      return false;
    } else {
      console.log(this.aptService);
      this.aptService.createForum(this.forumForm.value).then(res => {
        console.log(res);
        this.forumForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
