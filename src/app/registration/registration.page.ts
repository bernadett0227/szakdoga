import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication-service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public aptService: UserService,
    public router: Router,
    public fb: FormBuilder,
  ) {
  }

  userForm: FormGroup;


  ngOnInit() {
    this.userForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      birthdate: [''],
      gender: [''],
      email: [''],
    });
  }

  formSubmit(){
    if (!this.userForm.valid) {
      return false;
    } else {
      console.log(this.aptService);
      this.aptService.createUser(this.userForm.value).then(res => {
        console.log(res);
        this.userForm.reset();
        this.router.navigate(['/list-user']);
      })
        .catch(error => console.log(error));
    }
  }

  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)
      .then((res) => {
        this.router.navigate(['home']);
      }).catch((error) => {
      window.alert(error.message)
    })
  }

}
