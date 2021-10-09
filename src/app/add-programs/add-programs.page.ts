import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProgramsService } from '../shared/programs.service';
import firebase from "firebase";

@Component({
  selector: 'app-add-programs',
  templateUrl: './add-programs.page.html',
  styleUrls: ['./add-programs.page.scss'],
})

export class AddProgramsPage implements OnInit {
  programsForm: FormGroup;

  constructor(
    private aptService: ProgramsService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.programsForm = this.fb.group({
      name: [''],
      megnevezes: [''],
      leiras: [''],
      kezdo_datum: [''],
      befejezo_datum: [''],
      helyszin: [''],
      email: [''],
      mobil: [''],
      napok_szama: [''],
      })
  }

  formSubmit() {
    if (!this.programsForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.programsForm.value).then(res => {
        console.log(res);
        this.programsForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
