import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProgramsPage } from './list-programs.page';

const routes: Routes = [
  {
    path: '',
    component: ListProgramsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListProgramsPageRoutingModule {}
