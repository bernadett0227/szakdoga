import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {ListProgramsPage} from "./list-programs.page";
import {ListProgramsPageRoutingModule} from "./list-programs-routing.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ListProgramsPageRoutingModule
  ],
  declarations: [ListProgramsPage]
})
export class ListProgramsPageModule {}
