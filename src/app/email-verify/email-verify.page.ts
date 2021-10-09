import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.page.html',
  styleUrls: ['./email-verify.page.scss'],
})
export class EmailVerifyPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
