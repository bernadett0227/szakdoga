import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemProgramPage } from './item-program.page';

const routes: Routes = [
  {
    path: '',
    component: ItemProgramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemProgramPageRoutingModule {}
