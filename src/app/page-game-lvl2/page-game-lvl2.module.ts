import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageGameLvl2PageRoutingModule } from './page-game-lvl2-routing.module';

import { PageGameLvl2Page } from './page-game-lvl2.page';

import { ComponentGameLvl2Component } from '../component-game-lvl2/component-game-lvl2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageGameLvl2PageRoutingModule
  ],
  declarations: [PageGameLvl2Page, ComponentGameLvl2Component]
})
export class PageGameLvl2PageModule {}
