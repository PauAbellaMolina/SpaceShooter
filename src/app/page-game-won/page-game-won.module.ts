import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageGameWonPageRoutingModule } from './page-game-won-routing.module';

import { PageGameWonPage } from './page-game-won.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageGameWonPageRoutingModule
  ],
  declarations: [PageGameWonPage]
})
export class PageGameWonPageModule {}
