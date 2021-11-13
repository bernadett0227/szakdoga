import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ItemForumPageRoutingModule } from './item-forum-routing.module';
import { ItemForumPage } from './item-forum.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    IonicModule,
    ItemForumPageRoutingModule
  ],
  declarations: [ItemForumPage]
})
export class ItemForumPageModule {}
