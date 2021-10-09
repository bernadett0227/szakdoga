import { Component, OnInit } from '@angular/core';
import {ProgramsService} from "../shared/programs.service";
import {Programs} from "../shared/Programs"



@Component({
  selector: 'list-programs',
  templateUrl: 'list-programs.html',
  styleUrls: ['list-programs.page.scss'],
})

export class ListProgramsPage implements OnInit {
  Bookings = [];
  search: string;


  constructor(private aptService: ProgramsService) { }

  ngOnInit() {
    this.fetchBookings();
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

  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBooking(id) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id)

    }
  }

}
