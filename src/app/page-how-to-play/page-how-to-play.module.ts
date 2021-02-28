import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageHowToPlayPageRoutingModule } from './page-how-to-play-routing.module';

import { PageHowToPlayPage } from './page-how-to-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageHowToPlayPageRoutingModule
  ],
  declarations: [PageHowToPlayPage]
})
export class PageHowToPlayPageModule {}
