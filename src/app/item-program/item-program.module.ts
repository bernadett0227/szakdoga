import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemProgramPageRoutingModule } from './item-program-routing.module';

import { ItemProgramPage } from './item-program.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    IonicModule,
    ItemProgramPageRoutingModule
  ],
  declarations: [ItemProgramPage]
})
export class ItemProgramPageModule {}
