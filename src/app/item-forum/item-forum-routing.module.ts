import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemForumPage } from './item-forum.page';

const routes: Routes = [
  {
    path: '',
    component: ItemForumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemForumPageRoutingModule {}
