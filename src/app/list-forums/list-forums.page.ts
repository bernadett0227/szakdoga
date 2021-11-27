import {Component, OnInit} from '@angular/core';
import {Forum} from "../shared/forum";
import {ForumService} from "../shared/forum.service";
import {AuthenticationService} from "../shared/authentication-service";

@Component({
  selector: 'app-list-forums',
  templateUrl: './list-forums.page.html',
  styleUrls: ['./list-forums.page.scss'],
})
export class ListForumsPage implements OnInit {

  Forums = [];

  constructor(private aptService: ForumService, public authService: AuthenticationService) {
  }

  ngOnInit() {
    this.fetchForums();
    let forumRes = this.aptService.getForumList();
    forumRes.snapshotChanges().subscribe(res => {
      this.Forums = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Forums.push(a as Forum);
      })
    })
  }

  fetchForums() {
    this.aptService.getForumList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  getForum(id) {
    console.log(id);
      this.aptService.getForum(id)

  }


}

