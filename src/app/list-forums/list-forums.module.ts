import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListForumsPageRoutingModule } from './list-forums-routing.module';

import { ListForumsPage } from './list-forums.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListForumsPageRoutingModule
  ],
  declarations: [ListForumsPage]
})
export class ListForumsPageModule {}
