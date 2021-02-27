import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageGameOverPageRoutingModule } from './page-game-over-routing.module';

import { PageGameOverPage } from './page-game-over.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageGameOverPageRoutingModule
  ],
  declarations: [PageGameOverPage]
})
export class PageGameOverPageModule {}
