import { Component, OnInit } from '@angular/core';
import {ProgramsService} from "../shared/programs.service";
import {Programs} from "../shared/Programs"
import {AuthenticationService} from "../shared/authentication-service";



@Component({
  selector: 'list-programs',
  templateUrl: 'list-programs.html',
  styleUrls: ['list-programs.page.scss'],
})

export class ListProgramsPage implements OnInit {
  Bookings = [];
  search: string;


  constructor(private aptService: ProgramsService, public authService: AuthenticationService) { }

  ngOnInit() {
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Programs);
      })
    })
  }

  deleteBooking(id) {
    console.log(id);
    if (window.confirm('Biztos törölni akarod?')) {
      this.aptService.deleteBooking(id)

    }
  }

}
