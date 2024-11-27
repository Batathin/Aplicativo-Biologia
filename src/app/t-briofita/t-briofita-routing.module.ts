import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TBriofitaPage } from './t-briofita.page';

const routes: Routes = [
  {
    path: '',
    component: TBriofitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TBriofitaPageRoutingModule {}
