import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import firebase from "firebase";
import {ForumService} from "../shared/forum.service";
import {CommentService} from "../shared/comment.service";

@Component({
  selector: 'app-item-forum',
  templateUrl: './item-forum.page.html',
  styleUrls: ['./item-forum.page.scss'],
})
export class ItemForumPage implements OnInit {
  commentForm: FormGroup;
  Comment = [];
  id: any;
  Forums: any;
  date: string;
  comment: string;
  user: string;
  forumTitle: string;
  forumDate: number;
  forumDesc: string;
  forumUsername: string;


  constructor(private aptService: CommentService,
              private apt: ForumService,
              private actRoute: ActivatedRoute,
              public fb: FormBuilder,
              private router: Router,) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    let user = firebase.auth().currentUser;
    let date = new Date().toLocaleDateString();

    this.commentForm = this.fb.group({
      comment: [''],
      date: [date],
      user: [user.email],
      id: [this.id],
    });


    this.apt.getForum(this.id).valueChanges().subscribe(res => {
      this.forumDate = res['date'];
      this.forumDesc =  res['desc'];
      this.forumTitle = res['title'];
      this.forumUsername = res['username'];
    });

    let commentRes = this.aptService.getCommentList();
    commentRes.snapshotChanges().subscribe(res => {
      this.Comment = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Comment.push(a as Comment);
      })
    })
  }





  formSubmit() {
    if (!this.commentForm.valid) {
      return false;
    } else {
      this.aptService.createComment(this.commentForm.value).then(res => {
        this.commentForm.reset();
        this.router.navigate(['/list-forums']);
      })
        .catch(error => console.log(error));
    }
  }

  getForum(id) {
    this.aptService.getComment(id)
  }

}
