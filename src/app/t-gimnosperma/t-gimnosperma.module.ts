import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TGimnospermaPageRoutingModule } from './t-gimnosperma-routing.module';

import { TGimnospermaPage } from './t-gimnosperma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TGimnospermaPageRoutingModule
  ],
  declarations: [TGimnospermaPage]
})
export class TGimnospermaPageModule {}
