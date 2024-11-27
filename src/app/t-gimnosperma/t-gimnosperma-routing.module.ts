import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TGimnospermaPage } from './t-gimnosperma.page';

const routes: Routes = [
  {
    path: '',
    component: TGimnospermaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TGimnospermaPageRoutingModule {}
