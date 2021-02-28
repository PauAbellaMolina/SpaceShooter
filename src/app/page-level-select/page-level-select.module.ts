import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLevelSelectPageRoutingModule } from './page-level-select-routing.module';

import { PageLevelSelectPage } from './page-level-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLevelSelectPageRoutingModule
  ],
  declarations: [PageLevelSelectPage]
})
export class PageLevelSelectPageModule {}
