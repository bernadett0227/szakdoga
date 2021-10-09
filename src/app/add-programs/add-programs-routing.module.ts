import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProgramsPage } from './add-programs.page';

const routes: Routes = [
  {
    path: '',
    component: AddProgramsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProgramsPageRoutingModule {}
