import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TAngiospermaPageRoutingModule } from './t-angiosperma-routing.module';

import { TAngiospermaPage } from './t-angiosperma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TAngiospermaPageRoutingModule
  ],
  declarations: [TAngiospermaPage]
})
export class TAngiospermaPageModule {}
