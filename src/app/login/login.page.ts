import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChatService} from "../shared/chat.service";
import {AlertController, LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  credentialForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private chatService: ChatService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {

    this.credentialForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  async signUp() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.chatService.signUp(this.credentialForm.value).then(user => {
      loading.dismiss();
      this.router.navigateByUrl('/home', { replaceUrl: true});
    }, async err => {
      loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Sign up faild',
        message: err.message,
        buttons: ['OK'],
      });
      await alert.present();
    });
  }

  async signIn() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.chatService.signIn(this.credentialForm.value).then(user => {
      loading.dismiss();
      this.router.navigateByUrl('/home', { replaceUrl: true});
    }, async err => {
      loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Sign up faild',
        message: err.message,
        buttons: ['OK'],
      });
      await alert.present();
    });
  }

  get email() {
    return this.credentialForm.get('email');
  }

  get password() {
    return this.credentialForm.get('password');
  }

}
