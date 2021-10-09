import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProgramsPageRoutingModule } from './add-programs-routing.module';

import { AddProgramsPage } from './add-programs.page';
@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddProgramsPageRoutingModule
  ],
  declarations: [AddProgramsPage]
})
export class AddProgramsPageModule {}
