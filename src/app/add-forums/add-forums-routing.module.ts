import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddForumsPage } from './add-forums.page';

const routes: Routes = [
  {
    path: '',
    component: AddForumsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddForumsPageRoutingModule {}
