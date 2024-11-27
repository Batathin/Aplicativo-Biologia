import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TPteridofitaPage } from './t-pteridofita.page';

const routes: Routes = [
  {
    path: '',
    component: TPteridofitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TPteridofitaPageRoutingModule {}

