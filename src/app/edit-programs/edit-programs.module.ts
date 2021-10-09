import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProgramsPageRoutingModule } from './edit-programs-routing.module';

import { EditProgramsPage } from './edit-programs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProgramsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EditProgramsPage]
})
export class EditProgramsPageModule {}
