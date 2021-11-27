import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/user.service";
import {Users} from "../shared/Users";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {

  Users = [];

  constructor(private aptService: UserService) {
  }

  ngOnInit() {
    let userRes = this.aptService.getUserList();
    userRes.snapshotChanges().subscribe(res => {
      this.Users = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Users.push(a as Users);
      })
    })
  }

  getUser(id) {
    this.aptService.getUser(id)
  }


}

