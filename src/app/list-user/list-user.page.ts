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
    this.fetchUsers();
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

  fetchUsers() {
    this.aptService.getUserList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  getUser(id) {
    console.log(id);
    this.aptService.getUser(id)

  }


}

