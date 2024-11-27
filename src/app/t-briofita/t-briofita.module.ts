import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TBriofitaPageRoutingModule } from './t-briofita-routing.module';

import { TBriofitaPage } from './t-briofita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TBriofitaPageRoutingModule
  ],
  declarations: [TBriofitaPage]
})
export class TBriofitaPageModule {}
