import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TPteridofitaPageRoutingModule } from './t-pteridofita-routing.module';

import { TPteridofitaPage } from './t-pteridofita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TPteridofitaPageRoutingModule
  ],
  declarations: [TPteridofitaPage]
})
export class TPteridofitaPageModule {}
