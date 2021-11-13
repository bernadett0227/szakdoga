import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {OpinionService} from "../shared/opinion.service";
import {ProgramsService} from "../shared/programs.service";
import {Opinion} from "../shared/opinion";
import firebase from "firebase";

@Component({
  selector: 'app-item-program',
  templateUrl: './item-program.page.html',
  styleUrls: ['./item-program.page.scss'],
})
export class ItemProgramPage implements OnInit {
  opinionForm: FormGroup;
  Opinion = [];
  id: any;
  Bookings: any;
  search: string;
  megnevezes: string;
  leiras: string;
  napok_szama: string;
  helyszin: string;
  email: string;
  mobil: string;
  kezdo_datum: string;
  befejezo_datum: string;




  constructor(private aptService: OpinionService,
              private apt: ProgramsService,
              private actRoute: ActivatedRoute,
              public fb: FormBuilder,
              private router: Router,) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log(this.rate);
    let rate = this.onRate(this.rate);
    let user = firebase.auth().currentUser;
    this.opinionForm = this.fb.group({
      opinion: [''],
      rate: [""],
      user: [user.email],
      id: [this.id],
    });
    console.log(this.onRate(this.rate));
    this.apt.getBooking(this.id).valueChanges().subscribe(res => {
      this.megnevezes = res['megnevezes'];
        this.leiras =  res['leiras'];
        this.kezdo_datum = res['kezdo_datum'];
        this.befejezo_datum = res['befejezo_datum'];
        this.helyszin = res['helyszin'];
        this.email = res['email'];
        this.mobil = res['mobil'];
        this.napok_szama = res['napok_szama'];
        console.log(this.napok_szama);
    });

    this.fetchOpinions();
    let opinionsRes = this.aptService.getOpinionList();
    opinionsRes.snapshotChanges().subscribe(res => {
      this.Opinion = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Opinion.push(a as Opinion);
      })
    })
  }

  rate=0;
  onRate(rate): number {
    console.log(rate);
    this.rate = rate;
    return this.rate;
  }



  formSubmit() {
    if (!this.opinionForm.valid) {
      return false;
    } else {
      console.log(this.opinionForm.value);
      this.aptService.createOpinion(this.opinionForm.value).then(res => {
        console.log(res);
        this.opinionForm.reset();
        this.router.navigate(['/list-programs']);
      })
        .catch(error => console.log(error));
    }
  }
  fetchOpinions() {
    this.aptService.getOpinionList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  getBooking(id) {
    console.log(id);
    this.aptService.getOpinion(id)

  }
}
