import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProgramsService} from "../shared/programs.service";

@Component({
  selector: 'app-edit-programs',
  templateUrl: './edit-programs.page.html',
  styleUrls: ['./edit-programs.page.scss'],
})
export class EditProgramsPage implements OnInit {

  updateProgramsForm: FormGroup;
  id: any;

  constructor(private aptService: ProgramsService,
              private actRoute: ActivatedRoute,
              private router: Router,
              public fb: FormBuilder) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      res.valueOf()
    });
  }

  ngOnInit() {
    this.updateProgramsForm = this.fb.group({
      megnevezes: [''],
      leiras: [''],
      kezdo_datum: [''],
      befejezo_datum: [''],
      helyszin: [''],
      email: [''],
      mobil: [''],
      napok_szama: [''],
    });
    console.log(this.updateProgramsForm.value)

  }
  updateForm() {
    this.aptService.updateBooking(this.id, this.updateProgramsForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}
