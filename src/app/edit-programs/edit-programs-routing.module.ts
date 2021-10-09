import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProgramsPage } from './edit-programs.page';

const routes: Routes = [
  {
    path: '',
    component: EditProgramsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProgramsPageRoutingModule {}
