import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListForumsPage } from './list-forums.page';

const routes: Routes = [
  {
    path: '',
    component: ListForumsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListForumsPageRoutingModule {}
