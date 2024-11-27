import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TAngiospermaPage } from './t-angiosperma.page';

const routes: Routes = [
  {
    path: '',
    component: TAngiospermaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TAngiospermaPageRoutingModule {}
