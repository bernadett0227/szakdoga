import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AddForumsPageRoutingModule} from './add-forums-routing.module';

import {AddForumsPage} from './add-forums.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    IonicModule,
    AddForumsPageRoutingModule
  ],
  declarations: [AddForumsPage]
})
export class AddForumsPageModule {}
